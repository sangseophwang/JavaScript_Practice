const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [N, C] = input
    .shift()
    .split(" ")
    .map((e) => +e);
  const house = input.map((e) => +e);
  house.sort((a, b) => a - b);
  let left = 0;
  let right = house[house.length - 1];
  let answer = 0;
  // [1,2,4,8,9]

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = C - 1; // 공유기 사이의 거리의 개수
    let prev = house[0];
    for (let i = 0; i < N; i++) {
      if (house[i] - prev >= mid) {
        count--;
        prev = house[i];
      }
    }
    if (count > 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
      answer = mid;
    }
  }
  console.log(answer);
});
