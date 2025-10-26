const parseArgs = () => {
  const args = [...process.argv];
  const output = [];

  for (let i = 2; i < args.length; i += 2) {
    output.push(`${args[i].slice(2)} is ${args[i + 1]}`);
  }

  console.log(output.join(', '));
};

parseArgs();
