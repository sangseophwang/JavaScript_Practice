const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = +input.shift();
  let array = [];
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      array.push(n % 2);
    }
  }
  DFS(N);
  console.log(array.join(""));
});
