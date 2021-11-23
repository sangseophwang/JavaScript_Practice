const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  input.shift();
  let array;
  let result;

  input.forEach((i, idx) => {
    result = 0;
    array = [];
    if (idx % 2 === 1) {
      let arr = i.split(" ");
      arr.sort((a, b) => a - b);
      arr.forEach((j, idx2) => {
        if (idx2 % 2 === 0) array.push(j);
        else array.unshift(j);
      });
      array.forEach((i, idx) => {
        let data;
        if (idx == array.length - 1) data = Math.abs(i - array[0]);
        else data = Math.abs(i - array[idx + 1]);

        if (result < data) result = data;
      });
      console.log(result);
    }
  });
});
