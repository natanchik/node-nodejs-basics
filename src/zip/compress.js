import path from 'path';
import * as url from 'url';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const readPath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const writePath = path.join(__dirname, 'files', 'archive.gz');

  const gzip = createGzip();
  const read = createReadStream(readPath);
  const write = createWriteStream(writePath);

  pipeline(read, gzip, write, (err) => {
    if (err) console.error(err);
  });
};

await compress();
