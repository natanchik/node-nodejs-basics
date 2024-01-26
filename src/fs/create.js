import fs from 'fs';

const create = async () => {
  return fs.writeFile('./src/fs/files/fresh.txt', 'I am fresh and young', { flag: 'wx' }, (err) => {
    if (err) throw new Error('FS operation failed');
  });
};

await create();
