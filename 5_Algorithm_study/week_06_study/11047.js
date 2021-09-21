// 동전 0 (실버 2 - 그리디)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [n, m] = input.shift().split(" ");
  const num = input.map((e) => +e);
  console.log(num);
  process.exit();
});
