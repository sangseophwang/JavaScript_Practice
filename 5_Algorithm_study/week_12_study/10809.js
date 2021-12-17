const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const S = input.shift().split("");
  let array = [];
  for (let i = 97; i <= 122; i++) {
    let alphabet = String.fromCharCode(i);
    let answer = S.indexOf(alphabet);
    array += answer + " ";
  }
  console.log(array);
});
