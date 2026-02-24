const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// Config
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const UPLOAD_DIR = path.join(__dirname, '..', 'uploads', 'dwg');

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// In-memory file metadata store
let files = [];

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename: (req, file, cb) => {
        const uniqueName = `${uuidv4()}${path.extname(file.originalname).toLowerCase()}`;
        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedExtensions = ['.dwg', '.dxf'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error(`Invalid file type: ${ext}. Only .dwg and .dxf files are accepted.`), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: MAX_FILE_SIZE }
});

// POST /api/upload-dwg — Upload a DWG/DXF file
router.post('/upload-dwg', (req, res) => {
    upload.single('file')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(413).json({
                    error: `File too large. Maximum size is ${MAX_FILE_SIZE / (1024 * 1024)}MB.`
                });
            }
            return res.status(400).json({ error: err.message });
        }
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded.' });
        }

        const fileMeta = {
            id: uuidv4(),
            originalName: req.file.originalname,
            storedPath: req.file.filename,
            size: req.file.size,
            uploadedAt: new Date().toISOString()
        };

        files.push(fileMeta);

        console.log(`✅ DWG Uploaded: ${fileMeta.originalName} (${(fileMeta.size / 1024).toFixed(1)} KB)`);

        res.status(201).json(fileMeta);
    });
});

// GET /api/dwg-files — List all uploaded DWG files
router.get('/dwg-files', (req, res) => {
    res.json(files);
});

// GET /api/dwg-files/:id — Stream/download a DWG file
router.get('/dwg-files/:id', (req, res) => {
    const file = files.find(f => f.id === req.params.id);
    if (!file) {
        return res.status(404).json({ error: 'File not found.' });
    }

    const filePath = path.join(UPLOAD_DIR, file.storedPath);
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'File not found on disk.' });
    }

    const ext = path.extname(file.originalName).toLowerCase();
    const mimeTypes = {
        '.dwg': 'application/acad',
        '.dxf': 'application/dxf'
    };

    res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
    res.setHeader('Content-Disposition', `inline; filename="${file.originalName}"`);
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
});

module.exports = router;
