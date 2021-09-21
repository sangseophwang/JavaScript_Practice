// 회의실 배정 (실버 2 - 그리디)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const n = Number(input.shift());
  const stringToNumber = (string) => string.split(" ").map((e) => +e);
  const num = input
    .map((e) => stringToNumber(e))
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return a[1] - b[1];
    });
  let end = 0;
  let answer = 0;
  for (let x of num) {
    if (x[0] >= end) {
      answer++;
      end = x[1];
    }
  }
  console.log(answer);
  process.exit();
});

/*
해설
먼저 회의실 시간을 정렬해야 하는데, 우선 끝나는 시간이 같으면 시작 시간 순으로 정렬하고, 아니면 끝나는 시간대로 정렬한다.
그리고 end 변수를 만들어서 회의실 시간대의 끝 시간과 시작 시간을 비교해 answer에 하나씩 더해주고 end 변수 값을 바꿔준다.
*/
