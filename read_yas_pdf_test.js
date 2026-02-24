const fs = require('fs');

try {
    const files = fs.readdirSync('.');
    const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf') && f.includes('ياس'));

    if (pdfFile) {
        console.log(`Found PDF file: "${pdfFile}"`);
        const dataBuffer = fs.readFileSync(pdfFile);
        console.log(`File size: ${dataBuffer.length} bytes`);
        console.log("File read successfully.");
    } else {
        console.error("Could not find any PDF file with 'ياس' in the name.");
        console.log("Files in directory:", files);
    }
} catch (err) {
    console.error("Script Error:", err);
}
