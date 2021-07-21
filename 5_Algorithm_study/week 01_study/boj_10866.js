// 내가 쓴 답 (시간 초과 이슈)

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let commandCount = +input.shift();
let commands = input.map((v) => v.split(" "));

let deque = [];
for (let command of commands) {
  switch (command[0]) {
    case "push_front":
      deque.unshift(command[1]);
      break;
    case "push_back":
      deque.push(command[1]);
      break;
    case "pop_front":
      deque.length > 1 ? console.log(deque.shift()) : console.log(-1);
      break;
    case "pop_back":
      deque.length > 1 ? console.log(deque.pop()) : console.log(-1);
      break;
    case "size":
      console.log(deque.length);
      break;
    case "empty":
      deque.length > 1 ? console.log(0) : console.log(1);
      break;
    case "front":
      deque.length > 1 ? console.log(deque[0]) : console.log(-1);
      break;
    case "back":
      deque.length > 1 ? console.log(deque[deque - 1]) : console.log(-1);
      break;
  }
}

// 다른 곳에서 가져온 답

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = +input.shift();
let commands = input.map((v) => v.split(" "));

let result = "";
// 결과는 여기에 모아준다 (시간 초과 이슈)
let p;
// result에 추가해줄 temp 변수
let deque = [];
for (let i = 0; i < N; i++) {
  const command = commands[i][0];
  // push_front, empty 등 명령어
  const item = commands[i][1];
  // 숫자
  switch (command) {
    case "push_front":
      deque.unshift(item);
      // unshift는 배열 앞에 추가해준다.
      break;
    case "push_back":
      deque.push(item);
      // push는 배열 뒤에 추가해준다.
      break;
    case "pop_front":
      p = deque.shift();
      // shift는 배열 앞의 요소를 빼낸다.
      result += `${p ? p : -1}\n`;
      // pop_front를 실행하고 p에 변수가 들어가면 p를, 없으면 -1을 result에 보낸다.
      break;
    case "pop_back":
      p = deque.pop();
      // pop은 배열 뒤의 요소를 빼낸다.
      result += `${p ? p : -1}\n`;
      // pop_back을 실행하고 p에 변수가 들어가면 p를, 없으면 -1을 result에 보낸다.
      break;
    case "size":
      result += `${deque.length}\n`;
      // deque 요소 개수를 result에 보내기
      break;
    case "empty":
      result += `${deque.length === 0 ? 1 : 0}\n`;
      // 자바스크립트에서는 같은지 여부를 확인할 때 '===' 을 사용한다. '=='는 부정확하다.
      break;
    case "front":
      p = deque[0];
      result += `${p ? p : -1}\n`;
      break;
    case "back":
      p = +deque.slice(-1);
      result += `${p ? p : -1}\n`;
      break;
  }
}
console.log(result);
