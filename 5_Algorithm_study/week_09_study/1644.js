/*
소수의 연속합
문제
하나 이상의 연속된 소수의 합으로 나타낼 수 있는 자연수들이 있다. 몇 가지 자연수의 예를 들어 보면 다음과 같다.

3 : 3 (한 가지)
41 : 2+3+5+7+11+13 = 11+13+17 = 41 (세 가지)
53 : 5+7+11+13+17 = 53 (두 가지)
하지만 연속된 소수의 합으로 나타낼 수 없는 자연수들도 있는데, 20이 그 예이다. 7+13을 계산하면 20이 되기는 하나 7과 13이 연속이 아니기에 적합한 표현이 아니다. 또한 한 소수는 반드시 한 번만 덧셈에 사용될 수 있기 때문에, 3+5+5+7과 같은 표현도 적합하지 않다.

자연수가 주어졌을 때, 이 자연수를 연속된 소수의 합으로 나타낼 수 있는 경우의 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 자연수 N이 주어진다. (1 ≤ N ≤ 4,000,000)

출력
첫째 줄에 자연수 N을 연속된 소수의 합으로 나타낼 수 있는 경우의 수를 출력한다.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = +input[0];
  let prime = [];
  let check = new Array(N + 1).fill(true);
  for (let i = 2; i * i <= N; i++) {
    if (!check[i]) continue;
    for (let j = i * i; j <= N; j += i) {
      check[j] = false;
    }
  }
  for (let i = 2; i <= N; i++) {
    if (check[i]) prime.push(i);
  }
  console.log(prime);
  // let left = 0,
  //   sum = 0,
  //   answer = 0;
  // for (let right = 0; right < prime.length; right++) {
  //   sum += prime[right];
  //   while (sum > N) {
  //     sum -= prime[left];
  //     left++;
  //   }
  //   if (sum === N) answer++;
  // }
  // console.log(answer);
});

/*
시간초과

소수를 배열로 정리한 다음 for문을 두번 돌아서 temp에 연속된 수를 더할 때마다 답과 체크하도록 했다.
for문을 너무 많이 돌아서 시간 초과가 난 것 같다.

const number = +input[0];
const prime = [];
let answer = 0;
for (let i = 1; i <= number; i++) {
  let flag = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      flag = false;
    }
  }
  if (flag) {
    prime.push(i);
  }
}
for (let i = 1; i < prime.length; i++) {
  let temp = 0;
  for (let j = i + 1; j < prime.length; j++) {
    temp += prime[j];
    if (prime[i] + temp === number) answer++;
  }
}
if (prime[prime.length - 1] === number) answer++;
console.log(answer);
*/
