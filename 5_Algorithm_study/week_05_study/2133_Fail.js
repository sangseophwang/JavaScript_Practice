const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const n = +input;
  let dp = new Array(n + 1).fill(0);
  if (n % 2 === 1) {
    console.log(0);
  } else {
    dp[0] = 1;
    dp[2] = 3;
    for (let i = 4; i <= n; i += 2) {
      dp[i] += dp[i - 2] * 3;
    }
  }
  process.exit();
});
