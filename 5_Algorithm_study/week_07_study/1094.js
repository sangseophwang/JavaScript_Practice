const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  let x = Number(input[0]);
  const list = [64, 32, 16, 8, 4, 2, 1];
  let answer = 0;
  for (let i of list) {
    while (x - i >= 0) {
      x = x - i;
      answer++;
    }
  }
  console.log(answer);
});
