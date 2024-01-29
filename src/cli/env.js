const parseEnv = () => {
  const args = process.env;
  Object.keys(args).map((arg) => {
    if (arg.startsWith('RSS_')) {
      console.log(`${arg}=${args[arg]}`);
    }
  });
};

parseEnv();
