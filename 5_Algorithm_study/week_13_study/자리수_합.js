function solution(n, arr) {
  let answer,
    max = 0;
  for (let x of array) {
    let sum = 0;
    temp = x;
    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let array = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(7, array));
