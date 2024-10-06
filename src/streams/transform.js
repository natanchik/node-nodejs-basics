import { stdin, stdout } from 'process';
import { Transform, pipeline } from 'stream';

const transform = async () => {
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    },
  });

  pipeline(stdin, transform, stdout, (err) => console.log(err));
};

await transform();
