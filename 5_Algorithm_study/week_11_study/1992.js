const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  let [N, ...box] = input;
  const QuadTree = (N, i, j) => {
    if (N == "1") return box[i][j];
    let divide = Math.floor(N / 2);
    let left_top = QuadTree(divide, i, j);
    let right_top = QuadTree(divide, i, j + divide);
    let left_bottom = QuadTree(divide, i + divide, j);
    let right_bottom = QuadTree(divide, i + divide, j + divide);
    if (
      left_top.length === 1 &&
      left_top == right_top &&
      left_top == left_bottom &&
      left_top == right_bottom
    )
      return left_top;
    else return "(" + left_top + right_top + left_bottom + right_bottom + ")";
  };
  console.log(QuadTree(N, 0, 0));
});
