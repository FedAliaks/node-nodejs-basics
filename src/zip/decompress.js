import fs from "fs";
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const decompress = async () => {
    // Write your code here 
    const decompressFile = fs.createWriteStream(path.resolve(__dirname, "files", 'decompressFile.txt'));
    const smallFile = fs.createReadStream(path.resolve(__dirname, "files", 'archive.gz'));

    const chunksArr = [];

    smallFile.on('data', (chunk) => {
        chunksArr.push(chunk);
    })

    smallFile.on('end', () => {
        const buffer = Buffer.concat(chunksArr);
        zlib.unzip(buffer, (err, result) => {
            if (err) {
                console.log('error');
            }
            
            decompressFile.write(result);
        })
    })
};

await decompress();