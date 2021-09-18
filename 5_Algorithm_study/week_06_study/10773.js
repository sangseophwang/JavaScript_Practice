// 제로 (실버 4)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  let array = [];
  let answer = 0;
  const K = Number(input.shift());
  const num = input.map((e) => +e);
  for (let i = 0; i < K; i++) {
    if (num[i] !== 0) {
      array.push(num[i]);
    } else {
      array.pop();
    }
  }
  for (let i in array) {
    answer += array[i];
  }
  console.log(answer);
  process.exit();
});
