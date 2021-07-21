// 프린터 큐 ..?

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let testCase = +input.shift();
// 3이 들어간다.
for (let i = 0; i < testCase; i++) {
  let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let queue = input
    .shift()
    .split(" ")
    .map((v, i) => {
      return {
        index: i,
        // 몇 번째
        priority: +v,
        // 중요도
      };
    });
  let count = 0;
  while (queue.length) {
    let max = Math.max(...queue.map((v) => v.priority));
    // queue 안에 있는 최대값
    let front = queue.shift();
    if (front.priority === max) {
      count++;
      if (front.index === M) {
        console.log(count);
        break;
      }
    } else {
      queue.push(front);
    }
  }
}
