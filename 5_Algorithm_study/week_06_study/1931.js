// 회의실 배정 (실버 2 - 그리디)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const n = Number(input.shift());
  const stringToNumber = (string) => string.split(" ").map((e) => +e);
  const num = input
    .map((e) => stringToNumber(e))
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return a[1] - b[1];
    });
  let end = 0;
  let answer = 0;
  for (let x of num) {
    if (x[0] >= end) {
      answer++;
      end = x[1];
    }
  }
  console.log(answer);
  process.exit();
});
