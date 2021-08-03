//N과 M (1)

const input = require("fs").readFileSync("test.txt").toString().trim().split(' ');
const N = +input.shift(); //4
const M = +input.shift(); //2

const visited = new Array(N);
// 방문 기록 배열 만들어주기

let output = [];
// 백트래킹해서 빼줄 수 넣는 곳

let result = "";

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
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
