//더하기 사이클

const input = Number(require("fs").readFileSync("/dev/stdin").toString());

let num = input;
let sum;
let answer = 0;

while (true) {
  answer++;

  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (num === input) break;
}

console.log(answer);
