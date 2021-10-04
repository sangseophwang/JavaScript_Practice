const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [N, P] = input
    .shift()
    .split(" ")
    .map((e) => +e);
  const Input = input.map((e) => e.split(" ").map((e) => +e));
  const Stack = Array.from(Array(7), () => Array());
  let answer = 0;
  for (let i = 0; i < N; i++) {
    const [a, b] = Input[i];
    const Line = Stack[a];
    while (Line.length) {
      if (Line[Line.length - 1] > b) {
        Line.pop();
        answer++;
      } else if (Line[Line.length - 1] === b) {
        Line.pop();
        answer--;
        break;
      } else {
        break;
      }
    }
    Line.push(b);
    answer++;
  }
  console.log(answer);
});
