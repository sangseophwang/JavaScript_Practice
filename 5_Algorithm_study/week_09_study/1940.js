/*
  주몽
  입력
  첫째 줄에는 재료의 개수 N(1 ≤ N ≤ 15,000)이 주어진다. 
  그리고 두 번째 줄에는 갑옷을 만드는데 필요한 수 M(1 ≤ M ≤ 10,000,000) 주어진다. 
  그리고 마지막으로 셋째 줄에는 N개의 재료들이 가진 고유한 번호들이 공백을 사이에 두고 주어진다. 
  고유한 번호는 100,000보다 작거나 같은 자연수이다.

  출력
  첫째 줄에 갑옷을 만들 수 있는 개수를 출력한다.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = Number(input.shift());
  const M = Number(input.shift());
  const ingredient = input[0].split(" ").map((e) => +e);
  ingredient.sort((a, b) => a - b);
  let answer = 0;
  let start = 0;
  let end = N - 1;
  while (start < end) {
    let sum = ingredient[start] + ingredient[end];
    if (sum === M) {
      answer++;
      start++;
    } else if (sum > M) end--;
    else start++;
  }
  console.log(answer);

  // for (let i = 0; i < N; i++) {
  //   for (let j = i + 1; j < N; j++) {
  //     if (ingredient[i] + ingredient[j] === M) {
  //       answer++;
  //     }
  //   }
  // }
  // console.log(answer);
});

/*
  풀이



*/
