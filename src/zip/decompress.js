import path from 'path';
import * as url from 'url';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const readPath = path.join(__dirname, 'files', 'archive.gz');
  const writePath = path.join(__dirname, 'files', 'fileToCompress.txt');

  const gzip = createUnzip();
  const read = createReadStream(readPath);
  const write = createWriteStream(writePath);

  pipeline(read, gzip, write, (err) => {
    if (err) console.error(err);
  });
};

await decompress();
