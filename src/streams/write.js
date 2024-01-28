import path from 'path';
import fs, { WriteStream } from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    // Write your code here 
    const pathToFile = path.resolve(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = new WriteStream(pathToFile);
    process.stdin.on('data', (chunk) => {
        const data = chunk.toString();
        writeStream.write(chunk.toString());
    })
};

await write();