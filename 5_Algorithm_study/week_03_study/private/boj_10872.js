// 팩토리얼
// 재귀함수를 사용했다. n이 1보다 작거나 같으면 1을 내보내도록 설정한 뒤 그 전까지 계속 함수를 돌린다.

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
