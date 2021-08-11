// 연결 요소의 개수

const input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number)
// 6 5

const visited = new Array(N+1).fill(false);
// [ false, false, false, false, false, false, false ]

const graph = Array.from(new Array(N+1), () => new Array(N+1));

// [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],   0은 빈 자리
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0]
// ]

for(let i = 1; i <= M; i++) {
const [x, y] = input[i].split(' ').map(Number);
graph[x][y] = graph[y][x] = 1;
}

// [
//   [0, 0, 0, 0, 0, 0, 0],  0
//   [0, 0, 1, 0, 0, 1, 0],  1 - 2 - 5
//   [0, 1, 0, 0, 0, 1, 0],  2 - 1 - 5
//   [0, 0, 0, 0, 1, 0, 0],  3 - 5
//   [0, 0, 0, 1, 0, 0, 1],  4 - 3 - 6
//   [0, 1, 1, 0, 0, 0, 0],  5 - 1 - 2
//   [0, 0, 0, 0, 1, 0, 0]   6 - 4
// ]

let count = 0;

for (let i = 1; i <= N; i++) {
if (!visited[i]) {
  count++;
  DFS(i)
}
}

function DFS(V) {
visited[V] = true;
for (let i = 1; i <= N; i++) {
  if (graph[V][i] === 1 && !visited[i]) {
    DFS(i);
  }
}
}

console.log(count)