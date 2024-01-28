import { createHash } from 'crypto';
import path from 'path';
import fs from 'fs';
import { stdout } from 'node:process';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const calculateHash = async () => {
    // Write your code here 
    const hash = createHash('sha256');
    const pathToFile = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const readFile = fs.createReadStream(pathToFile);
    readFile.pipe(hash).setEncoding('hex').pipe(stdout)

};

await calculateHash();