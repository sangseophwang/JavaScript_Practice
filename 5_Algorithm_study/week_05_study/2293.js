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

  const dp = Array(K + 1).fill(0);
  dp[0] = 1;

  for (i = 0; i < N; i++) {
    // 동전 개수만큼 돌기
    for (j = coin[i]; j <= K; j++) {
      dp[j] += dp[j - coin[i]];
    }
  }

  console.log(dp[K]);

  process.exit();
});
