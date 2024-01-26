import path from 'path';
import fs from 'fs';
import { constants } from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    // Write your code here 
    const pathFile = path.resolve(__dirname, 'files', 'fresh.txt');
    fs.stat(pathFile, constants.F_OK, (err) => {
        if (err) {
            fs.writeFile(pathFile, 'I am fresh and young', (err) => {
                if (err) {
                    console.log(111);
                }
            });
        } else {
            throw 'FS operation failed';
        }
    })
};

await create();