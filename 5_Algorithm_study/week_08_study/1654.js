const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [K, N] = input
    .shift()
    .split(" ")
    .map((e) => +e);
  const data = input.map((e) => +e);

  let [min, max] = [1, Math.max(...data)];
  let mid, count, answer;
  do {
    mid = Math.floor((min + max) / 2);
    count = data.reduce((a, c) => a + Math.floor(c / mid), 0);
    // count = 배열 하나씩 중간 값이랑 나눠서 다 더한 개수

    if (count < N) {
      max = mid - 1;
    } else {
      min = mid + 1;
      answer = mid;
    }
  } while (min <= max);
  console.log(answer);
});

//do...while 문은 테스트 조건이 거짓으로 평가될 때까지 지정된 구문을 실행하는 루프를 만듭니다.
//단, 구문이 실행된 뒤에 테스트 조건이 평가됨으로 구문은 무조건 한 번은 실행됩니다.

//do구문
//while (조건식);
