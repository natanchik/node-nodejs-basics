import fs from 'fs';
import path from 'path';
import * as url from 'url';

const list = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const dirPath = path.join(__dirname, 'files');
  return fs.readdir(dirPath, (err, files) => {
    if (err) throw new Error('FS operation failed');
    console.log(files);
  });
};

await list();
