// 영화감독 숌
// 몇번째 666 영화가 나오는가
// 계속 더하다가 input값과 count가 같아지는 순간 출력
// includes 를 통해 n번째 666을 포함하는 수가 나오는지 확인

const n = +require("fs").readFileSync("/dev/stdin").toString();
let num = 666;
let count = 1;
while (count !== n) {
  num++;
  if (String(num).includes("666")) count++;
}
console.log(num);
