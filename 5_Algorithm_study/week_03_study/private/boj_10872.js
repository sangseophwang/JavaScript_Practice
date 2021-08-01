const input = require("fs").readFileSync("./test.txt").toString().trim();
const n = Number(input);

function recursive(n) {
  if (n <= 1) {
    return 1;
  }
  return recursive(n - 1) * n;
}

console.log(recursive(n));

// 다른 사람 풀이
// let n = +require('fs').readFileSync('dev/stdin').toString()
// const f = (n) => n<1 ? 1 : n *f(n-1)
// console.log(f(n))
