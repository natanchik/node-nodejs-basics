import fs from 'fs';
import path from 'path';
import * as url from 'url';

const read = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  return fs.readFile(filePath, (err, data) => {
    if (err) throw new Error('FS operation failed');
    console.log(data.toString());
  });
};

await read();
