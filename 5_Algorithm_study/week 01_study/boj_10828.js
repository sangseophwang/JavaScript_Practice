// 스택

// 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 해설

// 우선 값을 받아와 개행문자를 없애고 배열로 만든다.
// commandCount는 처음에 들어오는 숫자를 따로 빼버리는 배열이다. 따로 사용하지는 않는다.
// 출력할 배열인 printer와 저장 공간인 stack 배열을 만든다.
// switch - case는 if 조건물이 여러개 있을 때 대신으로 사용할 수 있다.
// 각각 명령어들을 불러와서 첫 단어의 경우의 수에 따라 행동한다.

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let commandCount = +input.shift();
let commands = input.map((v) => v.split(" "));

let printer = [];
let stack = [];
for (let command of commands) {
  switch (command[0]) {
    // command[0]과 케이스 값이 일치하는지 확인한다.
    case "push":
      // 정수 X 를 스택에 넣는 연산이다.
      stack.push(command[1]);
      break;
    case "pop":
      // 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없으면 -1을 출력한다.
      printer.push(stack.pop() || -1);
      break;
    case "size":
      // 스택에 들어있는 정수의 개수를 출력한다.
      printer.push(stack.length);
      break;
    case "empty":
      // 스택이 비어있으면 1, 아니면 0을 출력한다.
      printer.push(stack.length ? 0 : 1);
      break;
    case "top":
      // 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우 -1을 출력한다.
      printer.push(stack[stack.length - 1] || -1);
  }
}
// 마지막에 개행문자로 합쳐준다.
console.log(printer.join("\n"));
