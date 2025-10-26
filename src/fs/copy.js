import fs from 'fs';
import path from 'path';
import * as url from 'url';

const copy = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const oldPath = path.join(__dirname, 'files');
  const newPath = path.join(__dirname, 'files_copy');
  return fs.cp(oldPath, newPath, { force: false, errorOnExist: true, recursive: true }, (err) => {
    if (err) throw new Error('FS operation failed');
  });
};

await copy();
