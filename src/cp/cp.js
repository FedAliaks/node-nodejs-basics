import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'node:child_process';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    // Write your code here
    const pathToFile = path.resolve(__dirname, 'files', 'script.js')

    const childProcess = spawn('node', [pathToFile, ...args.split(' ')]);

    process.stdin.on('data', (data) => {
        childProcess.stdin.write(data);
    });

    childProcess.stdout.on('data', (chunk) => {
        console.log(chunk.toString());
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess('--args1 --args2 --args3');
