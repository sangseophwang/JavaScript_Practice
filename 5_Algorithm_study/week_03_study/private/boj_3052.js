// 나머지

// forEach로 각각 push할껀데 42로 나눈 나머지 중
// indexOf를 했을 때 -1이 나온다는건 배열에 num이 없다는 뜻.
// 그래서 배열에 넣어준다.

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let array = [];

input.forEach((e) => {
  const num = e % 42;

  if (array.indexOf(num) === -1) {
    array.push(num);
  }
});

console.log(array.length);
