// 카드 합체 놀이 (실버 2 - 그리디, 우선순위 큐)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [n, m] = input.shift().split(" ");
  const num = Number(input[0].split(" "));
  console.log(num);
  process.exit();
});
