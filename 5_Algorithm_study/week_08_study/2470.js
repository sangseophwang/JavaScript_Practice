// 두 용액 (2470, 투 포인터)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = Number(input.shift()); // 5
  const List = input[0]
    .split(" ")
    .map((e) => +e)
    .sort((a, b) => a - b); // [ -99, -2, -1, 4, 98 ]
  let left = 0;
  let right = N - 1; // 4
  let min = 2_000_000_001;
  let answer1, answer2;
  while (left < right) {
    const sum = List[left] + List[right]; // -1
    const abs = Math.abs(sum); // 1
    if (abs < min) {
      min = abs; // min = 1
      answer1 = List[left]; // answer1 = -99
      answer2 = List[right]; // answer2 =  98
    }
    if (sum < 0) {
      left++;
    } else if (sum > 0) {
      right--;
    } else {
      break;
    }
  }
  console.log(`${answer1} ${answer2}`);
  /*
  let min = 9999999;
  let a;
  let b;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (Math.abs(List[i] + List[j]) <= min) {
        min = Math.abs(List[i] + List[j]);
        a = List[i];
        b = List[j];
      }
    }
  }
  const answer = [a, b];
  console.log(answer.sort().join(" "));
  */
});
