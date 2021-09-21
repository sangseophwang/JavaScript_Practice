// 설탕 배달 (브론즈 1 - 그리디, 다이나믹 프로그래밍)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  let n = Number(input.shift());
  let answer = 0;
  while (true) {
    if (n % 5 === 0) {
      console.log(n / 5 + answer);
      break;
    }
    // 5로 딱 나눠 떨어지면 n/5가 정답이고, 딱 나눠 떨어지지 않으면 나눠 떨어질 때까지 n-3을 반복한다.
    if (0 > n) {
      console.log(-1);
      break;
    }
    // 그러다가 0 밑으로 떨어지면 바로 -1 출력

    answer++;
    n -= 3;
  }
  process.exit();
});
