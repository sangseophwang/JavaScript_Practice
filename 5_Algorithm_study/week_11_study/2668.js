const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = +input.shift();
  const board = input.map(Number);
  let result = [];

  for (let i = 0; i < N; i++) {
    let start = i;
    let next = board[i];
    let cycle = [start];
    let check = [];

    check[start] = true;
  }
});
