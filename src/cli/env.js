const parseEnv = () => {
  const args = process.env;
  const answer = [];
  Object.keys(args).map((arg) => {
    if (arg.startsWith('RSS_')) {
      answer.push(`${arg}=${args[arg]}`);
    }
  });
  console.log(answer.reverse().join('; '));
};

parseEnv();
