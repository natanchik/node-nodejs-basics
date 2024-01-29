import fs from 'fs';
import path from 'path';
import * as url from 'url';
import { stdout } from 'process';

const read = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const stream = fs.createReadStream(filePath);
  stream.pipe(stdout);
};

await read();
