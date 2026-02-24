const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const url = process.env.MONGO_URI || process.env.mongodb_url;
console.log('Testing connection to:', url ? url.replace(/:([^:@]+)@/, ':****@') : 'MISSING URL');

if (!url) {
    console.error('ERROR: MONGO_URI or mongodb_url is missing in .env');
    process.exit(1);
}

async function test() {
    const client = new MongoClient(url);
    try {
        console.log('Attempting to connect...');
        await client.connect();
        console.log('CONNECTED SUCCESSFULLY');
        const db = client.db();
        const collections = await db.listCollections().toArray();
        console.log('Collections sync check:', collections.map(c => c.name).join(', '));
        process.exit(0);
    } catch (err) {
        console.error('CONNECTION FAILED:');
        console.error(err);
        process.exit(1);
    }
}

test();
