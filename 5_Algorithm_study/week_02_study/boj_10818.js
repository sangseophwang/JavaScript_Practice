// 1차원 배열 - 최소 최대
// array.sort를 사용해서 줄을 세우고 최소 최대값을 구한다.

const input = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");
const array = input[1].split(" ").sort((a, b) => {
  return a - b;
});
console.log(array[0], array[array.length - 1]);
