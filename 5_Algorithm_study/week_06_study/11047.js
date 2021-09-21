// 동전 0 (실버 2 - 그리디)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  let [n, m] = input.shift().split(" ");
  const num = input.map((e) => +e);
  let answer = 0;
  let tmp;
  for (let i = n - 1; i >= 0; i--) {
    tmp = num[i];
    if (m / tmp >= 1) {
      answer += Math.floor(m / tmp);
      m = m % tmp;
    }
    if (m === 0) break;
  }

  console.log(answer);

  /*
  해설
  동전을 가장 높은 값부터 차례대로 m과 나눴을 때 나눠지는지 여부를 확인한 뒤
  나눠진다면 answer애 나눈 값의 소수점을 떼서 저장한다.
  그리고 m의 값을 임시 값과 나눈 나머지로 바꿔줘서 0이 될때까지 반복한다.
  */

  /*
  let answer = 0;
  while (m !== 0) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] > m) {
        m = m - num[i - 1];
        answer++;
        break;
      }
    }
  }
  console.log(answer);
  */
  process.exit();
});
