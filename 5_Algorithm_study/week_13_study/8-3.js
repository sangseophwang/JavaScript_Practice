const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = +input.shift();
  let array = [];
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      array.push(v);
      DFS(v * 2 + 1);
    }
  }
  DFS(N);
  console.log(array.join(" "));
});
