import fs from 'fs';
import path from 'path';
import * as url from 'url';

const create = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const newPath = path.join(__dirname, 'files', 'fresh.txt');
  return fs.writeFile(newPath, 'I am fresh and young', { flag: 'wx' }, (err) => {
    if (err) throw new Error('FS operation failed');
  });
};

await create();
