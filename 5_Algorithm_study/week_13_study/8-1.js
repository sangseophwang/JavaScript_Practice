const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  let N = +input.shift();
  let array = [];
  function recursive(n) {
    if (n === 0) return;
    else {
      recursive(n - 1);
      array.push(n);
    }
  }
  recursive(N);
  console.log(array.join(" "));
});
