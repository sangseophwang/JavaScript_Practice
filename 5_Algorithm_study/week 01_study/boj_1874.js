// 스택 수열

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = +input.shift();
const stack = [];
let message = "";

let counter = 1;
for (let i = 0; i < N; i++) {
  let n = Number(input[i]);

  while (counter <= n) {
    stack.push(counter++);
    message += "+\n";
  }

  // console.log(stack);
  if (stack[stack.length - 1] === n) {
    message += "-\n";
    stack.pop();
    // console.log("-");
  } else {
    message = "NO";
    break;
    // console.log("NO");
  }
}

console.log(message);

// 예 : 4 3 6 8 7 5 2 1   [입력]

// 1 2 3 4      [4] + + + +
// 1 2 3        [4] -
// 1 2          [3] -
// 1 2 5 6      [6] + +
// 1 2 5        [6] -
// 1 2 5 7 8    [8] + +
// 1 2 5 7      [8] -
// 1 2 5        [7] -
// 1 2          [5] -
// 1            [2] -
//              [1] -
