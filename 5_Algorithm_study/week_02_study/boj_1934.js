// 최소공배수
// 여러 입력값의 최소공배수 구하기
// 먼저 첫 수(테스트케이스 수)룰 따로 빼둔다.
// 두 수의 최대공약수를 구하는 법은 a를 b로 나눈 나머지를 r이라고 하면 GCD(a,b) = GCD(b,r) 이 되는데
// 이 때 r이 0이 되는 순간 나오는 b의 값이 최대공약수이다.
// 이 최대공약수를 가지고 a와 b의 값을 최대공약수로 나누면 그게 바로 최소공배수가 된다.

// 최대공약수란 'the least common multiple' 로 공통의 작은 배수가 되는 수를 뜻한다.
// 최소공배수는 두 개 이상의 수가 있는데 공통으로 배수가 되는 최소 수를 뜻한다.

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
