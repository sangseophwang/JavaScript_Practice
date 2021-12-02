const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = +input.shift();
  const list = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (sum + 1 >= list[i]) sum += list[i];
    else break;
  }
  console.log(sum + 1);
});
