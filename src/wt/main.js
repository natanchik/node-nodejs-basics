import { availableParallelism } from 'os';
import path from 'path';
import * as url from 'url';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const workersAmount = availableParallelism();

  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const workerPath = path.join(__dirname, 'worker.js');

  const workersArray = [];
  const result = new Array(workersAmount);

  function createWorker(i) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, {
        workerData: { count: i + 10 },
      });

      worker.on('message', (data) => {
        result[i] = { status: 'resolved', data: data };
        resolve();
      });

      worker.on('error', () => {
        result[i] = { status: 'error', data: null };
        reject();
      });
    });
  }

  for (let i = 0; i < workersAmount; i++) {
    workersArray.push(createWorker(i));
  }

  await Promise.all(workersArray);
  console.log(result);
};

await performCalculations();
