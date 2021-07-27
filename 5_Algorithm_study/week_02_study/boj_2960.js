// 에라토스테네스의 체
// 2부터 N까지의 모든 정수 중 가장 작은 소수부터 배수로 지우고 N까지 도달하면 다음 소수부터 배수로 지운다.

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const N = +input[0];
const K = +input[1];

let array = [];
// 빈 배열

let count = 0;
// K번째를 확인할 수

for (let i = 0; i <= N; i++) {
  array.push(i);
}
// 배열에 0부터 N까지 담는다.

function answer() {
  for (let i = 2; i <= N; i++) {
    for (let j = i; j <= N; j += i) {
      if (array[j] == 0) continue;
      array[j] = 0;
      count++;
      if (count == K) {
        console.log(j);
        return;
      }
    }
  }
}

// answer 함수를 만드는데, 배열에 0, 1이 들어있으니 2부터 시작한다.
// 배로 커지는 for문을 만들고 count에 더해준다.

answer();
