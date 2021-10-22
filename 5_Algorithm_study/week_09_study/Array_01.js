/*
큰 수 출력하기
N(1<=N<=100)개의 정수를 입력받아, 
자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.
(첫 번째 수는 무조건 출력한다)

▣ 입력예제 1 
6
7 3 9 5 6 12

▣ 출력예제 1 
7 9 6 12
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = Number(input.shift());
  const array = input[0].split(" ").map((e) => +e);
  let answer = [array[0]];
  for (let i = 1; i < N; i++) {
    if (array[i] > array[i - 1]) {
      answer.push(array[i]);
    }
  }
  console.log(answer.join(" "));
});

/*
  풀이

  먼저 입력으로 받은 N과 배열을 나눠준다.
  그리고 answer라는 배열을 만들어 '첫 번째 수는 무조건 출력한다'는 조건에 맞게 array[0]을 넣는다.
  그 다음 for문을 통해 2번째 배열 수부터 차례대로 앞의 수보다 큰 수를 answer 배열에 넣는다.
  마지막으로 answer에 모인 배열들을 join으로 합쳐주면 끝!

*/
