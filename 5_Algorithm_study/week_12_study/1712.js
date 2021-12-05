const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const [A, B, C] = input[0].split(" ").map(Number);
  let answer = Math.floor(A / (C - B)) + 1;
  B >= C ? (answer = -1) : answer;
  console.log(answer);
});
