const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MONGO_URI || process.env.mongodb_url;
if (!url) {
    console.warn('[MongoDB] WARNING: MONGO_URI or mongodb_url is not set in .env. MongoDB functionality will be limited.');
}

const client = new MongoClient(url || 'mongodb://localhost:27017/miyar');

let db = null;

async function connectToDatabase(retries = 5, delay = 5000) {
    if (db) return db;

    for (let i = 0; i < retries; i++) {
        try {
            if (!url) {
                console.warn('[MongoDB] No MONGO_URI/mongodb_url found. Using local fallback: mongodb://localhost:27017/miyar');
            }
            console.log(`[MongoDB] Connection attempt ${i + 1}/${retries}...`);
            await client.connect();
            console.log('[MongoDB] Connected successfully to server');

            // If the URL has a DB name, client.db() will use it, otherwise falls back to 'miyar'
            db = client.db();

            // Setup common collections and indexes
            try {
                const users = db.collection('users');
                await users.createIndex({ email: 1 }, { unique: true });

                const certificates = db.collection('certificates');
                await certificates.createIndex({ certificate_number: 1 }, { unique: true });
                await certificates.createIndex({ project_id: 1, version_number: 1 }, { unique: true });

                const versions = db.collection('project_versions');
                await versions.createIndex({ project_id: 1, version_number: 1 }, { unique: true });

                const projects = db.collection('projects');
                await projects.createIndex({ applicationNo: 1 }, { unique: true, sparse: true });
            } catch (indexError) {
                console.warn('[MongoDB] Index creation failed (might already exist):', indexError.message);
            }

            return db;
        } catch (error) {
            console.error(`[MongoDB] Connection attempt ${i + 1} failed:`, error.message);
            if (i < retries - 1) {
                console.log(`[MongoDB] Retrying in ${delay / 1000}s...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            } else {
                console.error('[MongoDB] All connection retries failed.');
            }
        }
    }
    return null;
}

function getDb() {
    return db;
}

module.exports = { connectToDatabase, getDb, ObjectId };
