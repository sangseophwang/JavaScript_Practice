//lcm

// 푸는 방법은 알겠는데 시간초과...

const input = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");
const ts = +input.shift();
let array = [];
let result = "";

for (let i = 0; i < ts; i++) {
  array.push(input[i].split(" ").map((e) => +e));
}

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

for (let i = 0; i < array.length; i++) {
  result += (array[i][0] * array[i][1]) / gcd(array[i]) + "\n";
}

console.log(result);
