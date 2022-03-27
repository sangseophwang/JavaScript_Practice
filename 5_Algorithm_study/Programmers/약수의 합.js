function solution(n) {
  let answer = 0;
  let index = 1;
  while (index <= n) {
    if (n % index === 0) answer += index;
    index++;
  }
  return answer;
}
