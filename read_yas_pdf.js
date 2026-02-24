const fs = require('fs');
const pdf = require('pdf-parse');

async function main() {
    try {
        const files = fs.readdirSync('.');
        // Find any PDF with 'ياس' in the name
        const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf') && f.includes('ياس'));

        if (!pdfFile) {
            console.error("Could not find any PDF file with 'ياس' in the name.");
            console.log("Files in directory:", files);
            return;
        }

        console.log(`Found PDF file: "${pdfFile}"`);
        const dataBuffer = fs.readFileSync(pdfFile);

        try {
            const data = await pdf(dataBuffer);
            console.log("--- START PDF METADATA ---");
            console.log(JSON.stringify(data.info, null, 2));
            console.log("--- START PDF TEXT ---");
            console.log(data.text);
            console.log("--- END PDF TEXT ---");
        } catch (error) {
            console.error("PDF Parsing Error:", error);
        }
    } catch (err) {
        console.error("Script Error:", err);
    }
}

main();
