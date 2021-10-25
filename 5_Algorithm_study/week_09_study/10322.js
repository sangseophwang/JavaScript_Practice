/*
늑대와 올바른 단어

다음은 늑대 나라에서 사용하는 올바른 단어에 대한 설명이다.

임의의 양의 정수 n에 대해서, 'w'가 n번 나오고, 그 다음에 'o'가 n번, 
그 다음에 'l'이 n번, 그 다음에 'f'가 n번 나온 단어는 올바른 단어이다.
올바른 단어 두 개를 이은 단어도 올바른 단어이다.
1번과 2번 조건으로 만들 수 있는 단어만 올바른 단어이다.
다음은 올바른 단어의 예시이다.

1번 규칙으로 만든 "wolf", "wwoollff", "wwwooolllfff"는 모두 올바른 단어이다.
2번 규칙으로 만든 "wolfwwoollff"은 올바른 단어이다.
2번 규칙을 두 번 써서 만든 "wolfwwoollffwolf"은 올바른 단어이다.
"wfol"은 올바른 단어가 아니다. (순서가 올바르지 않음)
"wwolfolf"는 올바른 단어가 아니다. (문자열의 중간에 다른 문자열을 집어 넣음)
"wwwoolllfff"는 올바른 단어가 아니다. (o가 2번 들어갔다)

입력
첫째 줄에 단어가 주어진다. 단어는 w, o, l, f로만 이루어져 있으며, 길이는 50을 넘지 않는다.

출력
입력으로 주어진 단어가 올바른 단어인 경우에는 1을, 아니면 0을 출력한다.

*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => (input += line)).on("close", () => {
  let words = Array.from(input);
  let answer = 0;
  let w = 0;
  if (words.length === 0) answer = 0;
  checkWolf(words);

  function checkWolf(word) {
    while (word.length !== 0) {
      if (word[0] === "w") {
        word.shift();
        w++;
      } else {
        if (w === 0) return;
        else {
          for (let i = 0; i < w; i++) {
            if (word.shift() !== "o") return;
          }
          for (let i = 0; i < w; i++) {
            if (word.shift() !== "l") return;
          }
          for (let i = 0; i < w; i++) {
            if (word.shift() !== "f") return;
          }
          w = 0;
          if (word.length === 0) {
            answer = 1;
            return;
          }
        }
      }
    }
  }

  console.log(answer);
});

/*
  풀이
  우선 단어를 글자 단위로 나눠준 다음, while문을 돌면서 글자를 하나씩 빼주는데,
  w의 개수를 저장해둔 다음 o,l,f 가 순서대로 w 개수만큼 빠져나오도록 한다.
  그리고 f가 나온 다음 또 단어가 이어질 수 있으므로 w를 초기화해준다.
  이 과정을 반복해 word의 길이가 0이 되면 answer에 1을 추가해주고 끝낸다.

*/
