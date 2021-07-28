// 평균

// 입력값에 들어온 점수 중 최대값을 구해 각 점수별로 '점수 / 최대값 * 100' 을 진행한다.
// 그리고 새로 구해진 점수들의 평균을 구한다.

const input = require("fs").readFileSync("test.txt").toString().split("\n");
const testCase = +input.shift();
let num = input[0].split(" ").map((e) => +e);
let result = 0;
const maxNum = Math.max.apply(null, num);

for (let i = 0; i < testCase; i++) {
  result = result + (num[i] / maxNum) * 100;
}

console.log(result / testCase);
