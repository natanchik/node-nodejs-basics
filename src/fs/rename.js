import fs from 'fs';
import path from 'path';
import * as url from 'url';

const rename = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = path.join(__dirname, 'files', 'properFilename.md');
  return fs.access(newPath, (err) => {
    if (err) {
      fs.rename(oldPath, newPath, (err) => {
        if (err) throw new Error('FS operation failed');
      });
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await rename();
