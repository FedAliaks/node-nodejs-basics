import fs from "fs";
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    // Write your code here 
    const bigFile = fs.createReadStream(path.resolve(__dirname, "files", 'fileToCompress.txt'));
    const smallFile = fs.createWriteStream(path.resolve(__dirname, "files", 'archive.gz'));
    bigFile.pipe(zlib.createGzip()).pipe(smallFile);
};

await compress();