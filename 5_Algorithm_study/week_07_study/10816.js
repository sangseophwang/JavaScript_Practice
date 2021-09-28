// 숫자카드 2 (실버 4)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = Number(input.shift());
  const nNumber = input
    .shift()
    .split(" ")
    .map((e) => +e);
  const M = Number(input.shift());
  const mNumber = input
    .shift()
    .split(" ")
    .map((e) => +e);

  const hashMap = new Map();
  nNumber.forEach((e) => {
    if (hashMap.has(e)) hashMap.set(e, hashMap.get(e) + 1);
    else hashMap.set(e, 1);
  });
  const answer = [];
  mNumber.forEach((e) => answer.push(hashMap.get(e) || 0));
  console.log(answer.join(" "));

  // 시간초과
  // let count = 0;
  // let answer = [];
  // for (let i = 0; i < M; i++) {
  //   for (let j = 0; j < N; j++) {
  //     if (mNumber[i] === nNumber[j]) {
  //       count++;
  //     }
  //   }
  //   answer.push(count);
  //   count = 0;
  // }
  // console.log(answer.join(" "));
});
