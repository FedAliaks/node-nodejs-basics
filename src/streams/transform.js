import { Transform } from 'stream';
import { EOL } from 'os';



const transform = async () => {
    // Write your code here

    const reverseText = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, `${chunk.toString().split('').reverse().join('')}${EOL}`);
        }
    })

    process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();