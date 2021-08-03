// const input = require('fs').readFileSync('test.txt').toString().split('\n')
// const [N, M] = input[0].split(' ').map(e=>+e)
// const num = input[1].split(' ').map(e=>+e).sort((a,b)=>a-b)

// const stack = []
// let result = ''

// function dfs(index, count) {
//   if(count === M) {
//     result += `${stack.join(' ')}\n`
//     return
//   }
//   for (let i = 0; i < N; i++) {
//     if (!index.includes(i)) {
//       stack.push(num[i])
//       dfs([...index], stack.length)
//       stack.pop()
//     }
//   }
// }
// dfs([], 0)

// console.log([...new Set(result.split("\n"))].join("\n"))


const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();

function solution4(input) {
  const lines = input.split('\n');
  const [n, m] = lines[0].split(' ').map((v) => parseInt(v));
  const numbers = lines[1].split(' ').map((v) => parseInt(v)).sort((a,b) => a-b);

  const stack = [];
  let result = '';

  function dfs(ids, count) {
    if (count === m) {
      result += `${stack.join(' ')}\n`;
      return;
    }

    for (let i = 0; i < n; i++) {
      if(!ids.includes(i)) {
        stack.push(numbers[i]);
        dfs([...ids, i], stack.length);
        stack.pop();
      }
    }
  }

  dfs([], 0);
  
  return [...new Set(result.split("\n"))].join("\n");
}
solution4(input)
const result = solution4(input);
console.log(result);


// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

// function dfs(n, m, arr, visit, res, temp = []) {
//   if (temp.length === m) {
//     res[res.length] = temp.join(" ");
//     return;
//   }

//   for (let i = 0; i < n; i += 1) {
//     if (visit[i]) continue;

//     visit[i] = true;
//     temp.push(arr[i]);

//     dfs(n, m, arr, visit, res, temp);

//     visit[i] = false;
//     temp.pop();
//   }
// }

// function solution(n, m, arr) {
//   const visit = Array(n).fill(false);
//   const res = [];

//   arr.sort((a, b) => a - b);
//   dfs(n, m, arr, visit, res);

//   const set = new Set(res);
//   return Array.from(set).join("\n");
// }

// const [n, m] = input[0].split(" ").map(Number);
// const arr = input[1].split(" ").map(Number);

// const ans = solution(n, m, arr);

// console.log(ans);