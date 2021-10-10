const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const T = Number(input[0]);
  let line = 1;
  for (let i = 0; i < T; i++) {
    let [n, m] = input[line].split(" ").map((x) => +x);
    console.log(n - 1);
    line = line + Number(input[line].split(" ")[1]) + 1;
  }
});

// 1 2 3 - 비행기 2대
// 1 2 3 4 5 - 비행기 4대
// 노드 개수 - 1 (2, 4)
