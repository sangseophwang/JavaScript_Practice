const readline = require('readline'); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, }); 

// 코드 시작
const solution = (input) => { 
  const n = +input.shift(); 
  const bye = +input.shift(); 
  const graph = [...new Array(n + 1)].map(() => []); 
  const visited = [...new Array(n + 1)].fill(0); 
  let cnt = 0; 

  for (const edge of input) { 
    const [start, destination] = edge.split(' ').map(e => +e); 
    graph[start].push(destination); 
    graph[destination].push(start); 
  } 
  visited[1] = 1; 
  const dfs = (start) => { 
    for (const destination of graph[start]) {
      if (!visited[destination]) { 
        visited[destination] = 1; 
        cnt++; 
        dfs(destination); 
      } } }; 

    dfs(1); 
    console.log(cnt); 

  }; 

    const input = []; 
    rl.on('line', function (line) {
      input.push(line); 
    }).on('close', function () {
      solution(input); 
      process.exit(); 
    });

// 1. 먼저 input을 받는다.
// 2. 