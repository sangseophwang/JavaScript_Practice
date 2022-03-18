function solution(n) {
  const answer = n
    .toString()
    .split("")
    .reverse()
    .map((e) => Number(e));
  return answer;
}
