const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [N, M] = input.shift().split(" ");
  const list = input.shift().split(" ").map(Number);
  let left = Math.max(...list);
  let right = list.reduce((acc, cur) => acc + cur);

  while (left <= right) {
    const size = Math.floor((left + right) / 2);

    let totalLength = 0;
    let array = [];

    for (let length of list) {
      if (totalLength + length > size) {
        array.push(totalLength);
        totalLength = 0;
      }
      totalLength += length;
    }
    if (totalLength !== 0) {
      array.push(totalLength);
    }

    if (array.length <= M) {
      right = size - 1;
    } else {
      left = size + 1;
    }
  }
  console.log(left);
});
