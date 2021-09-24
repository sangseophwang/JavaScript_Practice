const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const n = Number(input.shift());
  const stairs = input.map((e) => +e);
  let dp = Array(301);
  dp[0] = stairs[0]; // 10  첫번째 칸 올라가는 경우
  dp[1] = Math.max(stairs[0] + stairs[1], stairs[1]); // 30
  dp[2] = Math.max(stairs[1] + stairs[2], stairs[0] + stairs[2]); // 35

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
      stairs[i] + dp[i - 2],
      stairs[i] + stairs[i - 1] + dp[i - 3] // 연속해서 1칸식 3계단을 밟을 수 없기 때문에!
    );
  }
  console.log(dp[n - 1]);

  process.exit();
});
