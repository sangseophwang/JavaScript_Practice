const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const T = +input.shift();
  let count = 0;
  for (let i = 0; i < T; i++) {
    let N = +input[count];
    let temp = [];
    count++;
    for (let j = count; j < N + count; j++) {
      temp[j - count] = input[j].split(" ").map((e) => +e);
    }
    temp.sort((a, b) => a[0] - b[0]);
    let max = temp[0][1];
    let answer = 1;
    for (let i = 1; i < N; i++) {
      if (max > temp[i][1]) {
        max = temp[i][1];
        answer++;
      }
    }
    console.log(answer);
    count += N;
  }
  process.exit();
});
