const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = +input.shift();
  let graph = Array(N + 1)
    .fill()
    .map((e) => []);
  let parents = Array(N + 1).fill("");

  for (let i = 0; i < N - 1; i++) {
    let ipt = input[i].split(" ");
    graph[ipt[0]].push(ipt[1]);
    graph[ipt[1]].push(ipt[0]);
  }

  let start = "1";
  let stack = [start];

  while (stack.length) {
    let node = stack.pop();
    for (let n of graph[node]) {
      if (!parents[n]) {
        parents[n] = node;
        stack.push(n);
      }
    }
  }

  console.log(parents.slice(2).join("\n"));
});
