// 쇠막대기

// ( 괄호가 나오면 스택에 저장한다. ) 괄호가 나오면 스택에서 pop한다.
// () 이 레이저 부분이 세이브포인트다. 나올 때마다 스택 개수를 result에 저장해준다.

// 다른 사람 답
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let stack = 0;
let result = 0;
// 이번엔 스택을 빈 리스트가 아닌 숫자로 표현했다.

for (let i = 0; i < input[0].length; i++) {
  if (input[0][i] === "(") {
    // 이제 input값을 하나씩 가져올껀데, ( 이면 stack에 1을 더해준다.
    stack++;
  } else {
    stack--;
    // ) 이면 일단 1을 빼준다는걸 예약을 걸어놓고
    if (input[0][i - 1] === "(") {
      result += stack;
      // 만약 그 전이 ( 라면 result에 스택 전체를 더해주고
    } else {
      result++;
      // 그게 아니면 result에 하나 더해준다.
    }
  }
}
console.log(result);
