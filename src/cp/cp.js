import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const scriptPath = path.join(__dirname, 'files', 'script.js');

  const childProcess = spawn('node', [scriptPath, ...args], {
    stdio: [process.stdin, process.stdout, 'pipe'],
  });

  childProcess.on('error', (error) => {
    console.error(`Error: ${error}`);
  });

  childProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument1']);
