import path from 'path';
import * as url from 'url';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';

const calculateHash = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const readPath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const hash = createHash('sha256');
  const readStream = createReadStream(readPath);

  readStream.on('readable', () => {
    const data = readStream.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest('hex')}`);
    }
  });
};

await calculateHash();
