const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let sum = 0;
  for (let i = 1; i <= Number(line); i *= 10) {
    sum += Number(line) - i + 1;
  }
  console.log(sum);
});
