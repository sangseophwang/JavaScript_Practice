function solution(n) {
  const watermelon = ["수", "박"];
  let answer = "";
  for (let i = 0; i < n; i++) {
    answer += watermelon[i % watermelon.length];
  }
  return answer;
}

// 다른 사람의 풀이

const waterMelon = (n) => "수박".repeat(n).slice(0, n);

console.log("n이 3인 경우: " + waterMelon(3));
console.log("n이 4인 경우: " + waterMelon(4));
