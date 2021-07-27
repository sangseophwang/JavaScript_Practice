// 숫자의 개수
// 세 개의 자연수 A,B,C가 주어질 때 A x B X C 를 계산한 결과에 0부터 9까지 각각 숫자가 몇번 쓰였는지 구하는 프로그램

const input = require("fs").readFileSync("test.txt").toString().split("\n");
let num = String(input[0] * input[1] * input[2]).split("");
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i <= 9; i++) {
  for (let j = 0; j < num.length; j++) {
    if (Number(num[j]) === i) {
      count[i]++;
    }
  }
}

count.forEach((e) => console.log(e));

let input = require("fs").readFileSync("test.txt").toString().split("\n");
let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
  let count = 0;

  for (let j = 0; j < num.length; j++) {
    if (Number(num[j]) === i) {
      count++;
    }
  }

  console.log(count);
}
