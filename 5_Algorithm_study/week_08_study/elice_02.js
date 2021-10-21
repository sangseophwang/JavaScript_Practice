const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  /*
  N : 원판 내 숫자의 개수
  K : 플레이어의 수
  P : 선물이 위치한 부분
  L : 라운드의 수
  */
  const [N, K, P, L] = input
    .shift()
    .split(" ")
    .map((e) => +e);
  const PlayerTurn = [];
  let CurrentNumber = 1;
  for (let i = 0; i < input.length; i++) {
    PlayerTurn.push(input[i].split(" ").map((e) => +e));
  }
  for (let i = 0; i < L; i++) {
    for (let j = 0; j < K; j++) {
      let PlayerNumber = PlayerTurn[j][i];
      if (CurrentNumber <= PlayerNumber) {
        CurrentNumber = N - (PlayerNumber - CurrentNumber);
      } else {
        CurrentNumber -= PlayerNumber;
      }
      if (CurrentNumber === P) {
        console.log(`${j + 1} ${i + 1}`);
        return;
      }
    }
  }
  console.log(-1);
});
