const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = +input.shift();
  let answer = 0;
  for (let i = 0; i < N; i++) {
    input[i] = input[i].split(" ").map((e) => +e);
  }
  input.sort((a, b) => a[0] - b[0]);
  let min = input[0][0];
  let max = input[0][1];
  for (let i = 1; i < N; i++) {
    if (input[i][0] >= max) {
      // 배열의 첫번째 값이 이전까지의 최대값과 겹치지 않으면
      answer += max - min;
      min = input[i][0];
      max = input[i][1];
    } else {
      // 배열의 첫번째 값이 이전까지의 최대값과 겹치면
      if (input[i][1] > max) max = input[i][1];
    }
  }
  answer += max - min;
  console.log(answer);
});
