import path from 'path';
import fs from 'fs';
import { constants } from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const copy = async () => {
    // Write your code here
    const pathToGoalDir = path.resolve(__dirname, 'files_copy');
    const pathToSourceDir = path.resolve(__dirname, 'files');


    fs.stat(pathToGoalDir, (err) => {
        if (!err) {
            throw 'FS operation failed';
        } else {
            fs.mkdir(pathToGoalDir, (err) => {
                if (err) throw err;
            })

            fs.readdir(pathToSourceDir, (err, files) => {
                if (err) throw err;
                files.forEach((item)=> {
                    fs.copyFile(path.resolve(pathToSourceDir, item), path.resolve(pathToGoalDir, item), (err) => {
                        if (err) throw err;
                    });
                })
            });
        }
    })




};

await copy();
