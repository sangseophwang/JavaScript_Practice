const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", (line) => {
  input = line;
  input = parseInt(line);
}).on("close", () => {
  console.log(fibonacci(input));
  process.exit();
});

function fibonacci(n) {
  let result = 0;
  let num1 = 1;
  let num2 = 1;
  if (n <= 2) {
    return 1;
  }
  for (let i = 3; i <= n; i++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }
  return result;
}
