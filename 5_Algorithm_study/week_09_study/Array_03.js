/*
  가위 바위 보
  A, B 두 사람이 가위바위보 게임을 합니다. 
  총 N번의 게임을 하여 A가 이기면 A를 출력하고, 
  B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
  가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
  두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.

  ▣ 입력설명
  첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다. 
  두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다. 
  세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.

  ▣ 출력설명
  각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.

  ▣ 입력예제 1 
  5
  23313 
  11223

  ▣ 출력예제 1 
  A
  B
  A
  B 
  D
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = Number(input.shift());
  const [A, B] = input.map((e) => e.split(" ").map((e) => +e));
  let answer = "";
  for (let i = 0; i < N; i++) {
    if (A[i] === B[i]) {
      answer += "D\n";
    } else if (Math.abs(A[i] - B[i]) === 2) {
      if (A[i] > B[i]) {
        answer += "B\n";
      } else {
        answer += "A\n";
      }
    } else if (Math.abs(A[i] - B[i]) === 1) {
      if (A[i] > B[i]) {
        answer += "A\n";
      } else if (A[i] < B[i]) {
        answer += "B\n";
      }
    }
  }
  console.log(answer);
});

/*
  풀이

  가위 : 1, 바위 : 2, 보 : 3 일 때, 
  가위와 보를 제외하고 상대 수보다 1이 크면 이기는 쪽으로 결정된다.
  그래서 A의 i번째 수와 B의 i번째 수의 차이를 경우의 수로 두고, 
  차이가 2일 때와 1일 때로 나눠 각각 answer 변수에 개행문자와 함께 추가해준다.
  마지막에 answer를 출력해주면 끝!

*/
