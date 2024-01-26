import path from 'path';
import fs from 'fs';
import { constants } from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const remove = async () => {
    // Write your code here 

    const pathToFile = path.resolve(__dirname, 'files', 'fileToRemove.txt');

    fs.stat(pathToFile, (err) => {
        if (err) {
            throw 'FS operation failed';
        } else {
            fs.unlink(pathToFile, (err) => {
                if (err) {
                    throw 'FS operation failed';
                }
            })
        }
    })
};

await remove();