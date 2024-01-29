import path from 'path';
import fs from 'fs';
import { constants } from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const read = async () => {
    // Write your code here 
    const pathToFile = path.resolve(__dirname, 'files', 'fileToRead.txt');

    fs.readFile(pathToFile, (err, data) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            console.log(data.toString());
        }
    })
};

await read();