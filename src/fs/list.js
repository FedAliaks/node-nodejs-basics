import path from 'path';
import fs from 'fs';
import { constants } from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    // Write your code here 

    const pathToFolder = path.resolve(__dirname, 'files');

    fs.readdir(pathToFolder, (err, filesArray) => {
        if (err || !filesArray.length ) {
            throw new Error('FS operation failed');
        } else {
            filesArray.forEach((item) => console.log(item));
        }
    })





};

await list();