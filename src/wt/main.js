import os from 'os';
import {Worker} from 'worker_threads';

const performCalculations = async () => {
    const coresAmount = os.cpus().length;
    const promisesArr = [];

    const postToWorker = (index) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./worker.js', {
                workerData: index
            });
            worker.on("message", msg => resolve({ status: 'resolved', data: msg }));
            worker.on("error", () => reject({status: 'error', data: null}));
            worker.on("exit", () => reject({status: 'error', data: null}));
        });
    }

    for (let i = 0; i < coresAmount; i++) {
        promisesArr.push(postToWorker(10 + i));
    }

    return Promise.all(promisesArr).then( res => console.log(res))
};

await performCalculations();