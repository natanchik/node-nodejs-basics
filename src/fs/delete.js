import fs from 'fs';
import path from 'path';
import * as url from 'url';

const remove = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
  return fs.rm(filePath, { force: false }, (err) => {
    if (err) throw new Error('FS operation failed');
  });
};

await remove();
