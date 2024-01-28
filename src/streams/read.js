import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const read = async () => {
    // Write your code here
    const pathToFile = path.resolve(__dirname, 'files', 'fileToRead.txt');
    const stream = fs.createReadStream(pathToFile);
    stream.on('data', (chunk) =>{
        process.stdout.write(chunk);
    });
};

await read();