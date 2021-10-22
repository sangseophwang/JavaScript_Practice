/*
  보이는 학생
  선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 
  일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때, 
  맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성하세요. 
  (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)


▣ 입력설명
첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.

▣ 출력설명
선생님이 볼 수 있는 최대학생수를 출력한다.

▣ 입력예제 1
8
130 135 148 140 145 150 150 153

▣ 출력예제 1 
5
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
  let answer = 1;
  let currentTallestStudent = array[0];
  for (let i = 1; i < N; i++) {
    if (array[i] > currentTallestStudent) {
      answer++;
      currentTallestStudent = array[i];
    }
  }
  console.log(answer);
});

/*
  풀이

  answer라는 변수와 현재 가장 키가 큰 학생을 나타낼 currentTallestStudent 라는 변수를 생성한다.
  answer는 1을 넣고 시작하는데, 첫 번째 학생은 무조건 보이기 때문이다.
  그 다음 for 문을 돌면서 두번째 학생부터 currentTallestStudent와 비교하는데,
  크면 answer에 1씩 더해주고 currentTallestStudent에 현재 값으로 교체해준다.
  마지막으로 answer를 출력해주면 끝 !

*/
