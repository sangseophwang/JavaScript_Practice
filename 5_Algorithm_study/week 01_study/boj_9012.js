// 괄호

// '(' 와 ')' 가 짝을 이뤄 다 나가면 YES, 실패하면 NO를 출력한다.

// 해설

// 스택 문제이다. 우선 처음 들어온 6이라는 숫자를 없애주고 시작한다.
// 그 다음 개행문자로 받아온 괄호열들을 나눠준다.
// 그리고 '(' 이면 스택에 넣어주고 ')' 인데 스택에 괄호가 있으면 빼주고(pop) 아무것도 없으면 ')' 를 넣는다.
// 다 하고 마지막에 스택에 아무것도 없으면 'YES'를, 있으면 'NO'를 출력한다.

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

for (let i = 0; i < T; i++) {
  let arr = input[i].split("");
  let stack = [];
  arr.forEach(function (bracket) {
    if (bracket === "(") {
      stack.push(bracket);
    } else {
      if (stack.indexOf("(") >= 0) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    }
  });
  console.log(stack.length === 0 ? "YES" : "NO");
}
