/*
  빗물

입력
첫 번째 줄에는 2차원 세계의 세로 길이 H과 2차원 세계의 가로 길이 W가 주어진다. (1 ≤ H, W ≤ 500)

두 번째 줄에는 블록이 쌓인 높이를 의미하는 0이상 H이하의 정수가 2차원 세계의 맨 왼쪽 위치부터 차례대로 W개 주어진다.

따라서 블록 내부의 빈 공간이 생길 수 없다. 또 2차원 세계의 바닥은 항상 막혀있다고 가정하여도 좋다.

출력
2차원 세계에서는 한 칸의 용량은 1이다. 고이는 빗물의 총량을 출력하여라.

빗물이 전혀 고이지 않을 경우 0을 출력하여라.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const block = input[1].split(" ").map((e) => +e);
  const N = block.length;
  let answer = 0;
  for (let i = 1; i < N - 1; i++) {
    let left = 0;
    let right = 0;
    for (let j = 0; j < i; j++) {
      left = Math.max(left, block[j]);
    }
    for (let j = N - 1; j > i; j--) {
      right = Math.max(right, block[j]);
    }
    answer += Math.max(0, Math.min(left, right) - block[i]);
  }
  console.log(answer);
});

/*
  풀이
  투포인터.

*/
