// DFS와 BFS
const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');
const [n, m, v] = input.shift().split(" ").map(e => +e);
// n(정점의 개수) : 4
// m(간선의 개수) : 5
// v(탐색을 시작할 정점의 번호) : 1


let graph = new Array(n + 1).fill(0).map(e => []);
// [ [], [], [], [], [] ]

for (let i = 0; i < m; i++) {
  const [a, b] = input.shift().split(" ").map(e => +e);
  graph[a].push(b);
  graph[b].push(a);
  // [ [], [ 2, 3, 4 ], [ 1, 4 ], [ 1, 4 ], [ 1, 2, 3 ] ]
}

graph = graph.map(e => e.sort((a, b) => a-b))
// [ [], [ 2, 3, 4 ], [ 1, 4 ], [ 1, 4 ], [ 1, 2, 3 ] ] 정렬

//방문기록
let visited = new Array(n + 1).fill(false);
// [ false, false, false, false, false ]

//dfs 결과
const result = [];
dfs(v);
console.log(result.join(" "));
// [1 2 4 3]

//방문초기화
visited = visited.fill(false);
// [ false, false, false, false, false ]

// bfs 결과
console.log(bfs(v));
// [1 2 3 4]

//dfs
function dfs(v) {
  if (visited[v]) return;
  visited[v] = true;
  // 체크인
  result.push(v);
  // result에 값 넣어주고
  // graph : [ [], [ 2, 3, 4 ], [ 1, 4 ], [ 1, 4 ], [ 1, 2, 3 ] ]
  graph[v].forEach((node) => {
    if (!visited[node]) {
      dfs(node);
      // 1 -> 2 -> 4 -> 3 
    }
  });
}

//bfs
function bfs(v) {
  const answer = [];
  // [1]
  const queue = [v];
  // ex) bfs(1) -> queue = [1]

  while (queue.length > 0) {
    const check = queue.shift();
    // 1
    visited[check] = true;
    // [ false, true, false, false, false ]
    answer.push(check);
    // graph : [ [], [ 2, 3, 4 ], [ 1, 4 ], [ 1, 4 ], [ 1, 2, 3 ] ]
    graph[check].forEach((next) => {
      if (!visited[next]) {
        // visited[2] = false
        queue.push(next);
        // queue = [1, 2]
        visited[next] = true;
        // visited[2] = true
        // 1 -> 2 -> 3 -> 4
      }
    });
  }
  return answer.join(" ");
}