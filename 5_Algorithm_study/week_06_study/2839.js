// 설탕 배달 (브론즈 1 - 그리디, 다이나믹 프로그래밍)

// 동전 0 (실버 2 - 그리디)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  process.exit();
});
