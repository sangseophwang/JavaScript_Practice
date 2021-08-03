// N과 M (1)
// 기본 개념 : for문(1) 안에 for문(2) => (2)가 다 끝나야 (1)이 넘어가기 때문에
// 순서대로 값을 받을 수 있다. (12 / 13 / 14 / 21 ...)

const input = require("fs").readFileSync("test.txt").toString().trim().split(' ');
const N = +input.shift(); //4
const M = +input.shift(); //2

const visited = new Array(N);
// 방문 기록 배열 만들어주기

let output = [];
// 출력값 모으는 곳

let result = "";
// 출력할 값

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {           // 1일 때 재귀 쭈루룩, 다 넘어가면 2부터
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);
    dfs(cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(result.trim());
