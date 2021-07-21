// 문자열 집합

// input을 받아서 처음 숫자는 분리해서 따로 빼준다.
// 숫자 0번째만큼 input에서 빼와서 리스트를 만든다.
// input을 돌려서 input의 i번째 문자가 리스트 안에 있는지 확인한다. 있으면 +1, 없으면 pass
// 마지막에 console.log

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map((e) => +e);

let answer = 0;
let set = new Set();

while (N--) {
  set.add(input.shift());
}

while (M--) {
  if (set.has(input.shift())) answer++;
}

console.log(answer);

let input = require("fs").readFileSync("./dev/stdin").toString().split("\n");
const arr = input.shift().split(" ").map(Number);
const N = arr[0],
  M = arr[1];
let answer = 0;

let set = new Set();
// Set은 중복이 허용되지 않는 객체이다. 이미 같은 값이 존재하면 추가가 안된다.
while (N--) {
  set.add(input.shift());
  // 기준이 되는 집합 S를 set에 넣어주고
}

while (M--) {
  if (set.has(input.shift())) answer++;
  // has는 set 내부에 값이 존재하는지 확인해준다. 있으면 answer에 1을 더해준다.
}

console.log(answer);
