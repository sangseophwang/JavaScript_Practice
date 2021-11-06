const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = +input.shift();
  let array = [];
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      array.push(L);
    }
  }
  DFS(N);
  console.log(array.join(" "));
});
