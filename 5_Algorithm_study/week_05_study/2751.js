const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const n = Number(input.shift());
  const number = input.map((e) => +e);
  const result = number.sort((a, b) => a - b);
  console.log(result.join("\n"));
  process.exit();
});
