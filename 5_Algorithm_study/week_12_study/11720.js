const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = +input.shift();
  const numbers = input.shift().split("").map(Number);
  let answer = 0;
  for (let i of numbers) {
    answer += i;
  }
  console.log(answer);
});
