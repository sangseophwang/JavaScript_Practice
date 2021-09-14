const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, K] = input
    .shift()
    .split(" ")
    .map((e) => +e);
  const coin = input.map((e) => +e);

  let dp = Array(K + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= K; j++) {
      dp[j] = Math.min(dp[j], dp[j - coin[i] + 1]);
    }
  }

  console.log(dp[K] === Infinity ? -1 : dp[K]);
  process.exit();
});
