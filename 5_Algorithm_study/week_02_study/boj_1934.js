// 최소공배수
// 여러 입력값의 최소공배수 구하기
// 먼저 첫 수(테스트케이스 수)룰 따로 빼둔다.
//

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const ts = +input.shift();
let result = "";

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

for (let i = 0; i < ts; i++) {
  let num = input[i].split(" ").map((a) => +a);
  let a = num[0];
  let b = num[1];
  result += lcm(a, b) + "\n";
}

console.log(result);
