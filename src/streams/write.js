import fs from 'fs';
import path from 'path';
import * as url from 'url';
import { stdin } from 'process';

const write = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const stream = fs.createWriteStream(filePath);
  stdin.pipe(stream);
};

await write();
