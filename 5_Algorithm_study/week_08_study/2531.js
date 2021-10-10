const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [N, d, k, c] = input
    .shift()
    .split(" ")
    .map((e) => +e);
  /*
  N = 회전 초밥 벨트에 놓인 접시의 수
  d = 초밥의 가짓수
  k = 연속해서 먹는 접시의 수
  c = 쿠폰 번호
  */

  const belt = input.map((e) => +e);
  // 7 9 7 30 2 7 9 25

  const sushi = new Array(d + 1).fill(0);
  // 0인 배열 31개

  let max = 0;
  let count = 0;

  for (let i = 0; i < k; i++) {
    if (sushi[belt[i]] === 0) count++;
    sushi[belt[i]]++;
  }
  // 7=2개, 9=1개, 30=1개

  max = count;
  // 우선 먹을 수 있는 가짓수 3개 (7, 9, 30)

  for (let i = 1; i < N; i++) {
    if (max <= count) {
      if (sushi[c] === 0) {
        max = count + 1;
        // 쿠폰 추가
      } else {
        max = count;
        // 쿠폰 적용돼있으면 넘어가기
      }
    }
    sushi[belt[i - 1]]--;
    if (sushi[belt[i - 1]] === 0) count--;

    const right = (i + k - 1) % N;
    // 4 5 6 7 0 1 2

    if (sushi[belt[right]] === 0) count++;
    sushi[belt[right]]++;
  }
  console.log(max);
  // 2 7 9 25 +30
});
