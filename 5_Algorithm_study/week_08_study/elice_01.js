const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [N, h] = input
    .shift()
    .split(" ")
    .map((e) => +e);
  let array = [];
  let answer = 0;
  let stop = -1;
  for (let i = 0; i < input.length; i++) {
    array.push(input[i].split(" ").map((e) => +e));
  }
  array.sort();
  for (let i = 0; i < N; i++) {
    if (array[i][2] === 2) {
      continue;
    }
    if (h < array[i][1]) {
      if (array[i][2] === 1) {
        answer++;
      } else if (array[i][2] === 3) {
        stop = array[i][0];
        break;
      }
    }
  }
  console.log(stop, answer);
});
