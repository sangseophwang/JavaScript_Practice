const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = Number(input.shift());
  const dot = [];
  let answer = 0;
  for (let i = 0; i < N; i++) {
    dot.push(input[i].split(" ").map((e) => +e));
  }
  dot.sort();
  for (let i = 0; i < N - 1; i++) {
    let rowLength = dot[i + 1][0] - dot[i][0];
    let lowColumnLength = Math.min(dot[i][1], dot[i + 1][1]);
    let highColumnLength = Math.max(dot[i][1], dot[i + 1][1]);
    if (dot[i][1] !== dot[i + 1][1]) {
      answer +=
        lowColumnLength * rowLength +
        ((highColumnLength - lowColumnLength) * rowLength) / 2;
    } else {
      answer += dot[i][1] * lowColumnLength;
    }
  }
  console.log(answer);
});

/*
  i번째의 높이와 i+1번째의 높이가 다르면 둘 중 더 낮은 수의 높이 * (dot[i+1][0] - dot[i][0])

*/
