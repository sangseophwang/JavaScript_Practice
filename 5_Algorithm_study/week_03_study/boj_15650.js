// N과 M(2)

const input = require('fs').readFileSync('test.txt').toString().trim().split(' ').map(e => +e);
const N = input.shift()
const M = input.shift()
const visited = new Array(N)
const output = []
let result = '';

function dfs(index, count) {
  if (count === M) {
    result += `${output.join(' ')}\n`
    return;
  }
  for (let i = index; i < N; i++) {
    if(visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1)
    dfs(i, count+1)
    output.pop()
    visited[i] = false
  }
}

dfs(0,0)
console.log(result)


// const [N, M] = require('fs').readFileSync('dev/stdin').toString().split(' ').map(x=>+x);

// let output = "";
// let pool = [];
// function search(deps, s){
//     if(pool.length === M){
//         output += pool.join(' ') + '\n';
//         return;
//     }

//     for(let i=s; i<=N; i++){
//         pool.push(i);
//         search(deps+1, i+1);
//         pool.pop();
//     }
// }
// search(0, 1);
// console.log(output);