import path from 'path';
import fs from 'fs';
import { constants } from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const rename = async () => {
    // Write your code here 

    const wrongFile = path.resolve(__dirname, 'files', 'wrongFileName.txt');
    const correctFile = path.resolve(__dirname, 'files', 'properFilename.md');

    fs.stat(correctFile, (err) => {
        if (!err) throw 'FS operation failed';
    });

    fs.stat(wrongFile, (err) => {
        if (err) {
            if (!err) throw 'FS operation failed';
        } else {
            fs.rename(wrongFile, correctFile, (err) => {
                if (err) throw err;
            })
        }
    })






};

await rename();