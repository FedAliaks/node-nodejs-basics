import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { Worker } from "worker_threads";
import os from 'os';

const performCalculations = async () => {
    // Write your code here
    let count = 10;
    const cp = os.cpus();
    const pathToFile = path.resolve(__dirname, 'worker.js');

    const arrResultsWorker = await Promise.allSettled(cp.map(() => {
        return new Promise((res, rej) => {
            const worker = new Worker(pathToFile, {
                workerData: count++,
            })
            worker.on('message', (data) => res(data));
            worker.on('error', (data) => rej(data));
        })
    }));

    const arrResult = arrResultsWorker.map((item) => {
        const result = Boolean(item.status === 'fulfilled')
        return {
            status: result ? "resolved" : 'error',
            data: result ? item.value : null,
        }
    });

    console.log(arrResult);
};

await performCalculations();