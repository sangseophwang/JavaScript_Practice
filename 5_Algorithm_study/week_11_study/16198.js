const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const N = +input.shift();
  const weight = input[0].split(" ").map((e) => +e);
  let answer = 0;
  function energy(weight, sum) {
    let temp = [...weight];
    if (weight.length === 2) answer = Math.max(answer, sum);
    for (let i = 1; i < temp.length - 1; i++) {
      let rest = [...temp.slice(0, i), ...temp.slice(i + 1)];
      energy(rest, sum + temp[i - 1] * temp[i + 1]);
    }
  }
  energy;
});
