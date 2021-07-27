// 소수
// 자연수 M과 N이 주어질 때 M 이상 N 이하의 자연수 중 소수인 것을 모두 골라 소수의 합과 최솟값을 찾아라.

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((n) => +n);
// 먼저 입력값을 받아와 개행문자로 나눠주고 정수로 만들어준다.

let array = [];
let sum = 0;
// 최소값을 구할 배열과 합을 구할 sum 변수를 만든다.

for (let i = input[0]; i <= input[1]; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) count++;
    if (count > 2) break;
  } // 1과 i로만 나눠지는 수 구하기
  if (count === 2) {
    sum += i;
    array.push(i);
  } // 구했으면 sum에 더해주고 array에 넣기
}

if (array.length > 0) {
  console.log(sum);
  console.log(array[0]); // 소수가 있으면 합과 배열의 첫번째 수 (최소값) 출력
} else {
  console.log(-1);
} // 소수가 없으면 -1 출력
