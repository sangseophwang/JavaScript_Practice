// 바이러스

function dfs(v) {
  count++;
  visit[v] = true;
  for (let i = 0; i < node[v].length; i++) {
    if (visit[node[v][i]] === false) dfs(node[v][i]);
  }
}
// ex) dfs(1)
// [ false, true, false, false, false, false, false, false ]
// for (let i = 0; i <node[1].length; i++) {
//    if (visit[node[1][0]] === false) dfs(node[1][0])
// }
// 1 -> 2 -> 3 -> 2 -> 5 -> 6 -> 5 -> 끝

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);   // 7
const C = Number(input[1]);   // 6
const com = input.slice(2).map((e) => e.split(' ').map(Number));
// [ [ 1, 2 ], [ 2, 3 ], [ 1, 5 ], [ 5, 2 ], [ 5, 6 ], [ 4, 7 ] ]

const node = new Array(N + 1).fill(0).map(() => new Array());
// [ [], [], [], [], [], [], [], [] ]

const visit = new Array(N + 1).fill(false);
// [ false, false, false, false, false, false, false, false ]

for (let i = 0; i < com.length; i++) {
  const [A, B] = com[i];
  node[A].push(B);
  node[B].push(A);
  // [ [], [2, 5], [1, 3, 5], [2], [7], [1, 2, 6], [5], [4] ]
}

let count = 0;
dfs(1);

console.log(count - 1);
// 1번 컴퓨터를 통해 걸리는 컴퓨터의 수니까 1을 빼준다.