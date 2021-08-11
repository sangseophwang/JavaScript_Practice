// 섬의 개수

const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

// while문을 돌릴 때마다 reset될 수 있도록 값 설정
let n = -1;
let m = -1;
let i = 0;
let map = [];
let result = "";

while (true) {
  let [column, row] = input[i].split(" ").map((e) => +e);
  if (column === 0 && row === 0) break;
  // 마지막 0 0 일 때 종료

  n = row;
  m = column;
  // ex) -1 -1 -> 2 2
  
  let count = 0;

  map = input.slice(i + 1, i + 1 + n).map((e) => e.split(" ").map((i) => +i));
  // 2부터 4까지 수 받아오기   0 1  /  1 0

  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (dfs(j, k)) {
        // dfs(0, 0) dfs(0, 1) dfs(1, 0) dfs(1, 1)
        count++;
      }
    }
  }
  result += count + "\n";
  i += n + 1;
  // dfs를 다 돌았으면 다음 숫자로 넘어간다.
}

console.log(result.trim());

function dfs(x, y) {
  if (x < 0 || y < 0 || x >= n || y >= m) return false;
  if (map[x][y] === 1) {
    map[x][y] = 2;
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
    dfs(x - 1, y - 1);
    dfs(x - 1, y + 1);
    dfs(x + 1, y - 1);
    dfs(x + 1, y + 1);
    // 모든 방향에 접하는 아이가 존재하는지 확인
    return true;
  }
  return false;
  // 그 외 나머지는 false!
}