function solution(n) {
  let array = n
    .toString()
    .split("")
    .map((element) => Number(element));
  return array.reduce((acc, cur) => acc + cur);
}
