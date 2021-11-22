const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  input.shift();
  let array = [];
  let result = 0;

  input.forEach((i, index) => {
    if (index % 2 === 1) {
    }
  });
});
