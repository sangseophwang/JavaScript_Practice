// 최댓값
// 첫째 줄에 최대값을, 둘째 줄에 최댓값이 몇 번째 수인지 출력하는 문제

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((e) => +e);

let max = 0;
let maxLocation = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i];
    maxLocation = i + 1;
  }
}

console.log(max);
console.log(maxLocation);
