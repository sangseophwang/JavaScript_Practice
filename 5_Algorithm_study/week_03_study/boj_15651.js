// N과 M(3)
// i만 1로 바꾸면 됨.

const [N, M] = require('fs').readFileSync('test.txt').toString().split(' ').map(x=>+x);

let output = "";
let array = [];
function dfs(depth, count){
    if(array.length === M){
        output += array.join(' ') + '\n';
        return;
    }

    for(let i=1; i<=N; i++){
        array.push(i);
        dfs(depth+1, count+1);
        array.pop();
    }
}
dfs(0, 1);
console.log(output);