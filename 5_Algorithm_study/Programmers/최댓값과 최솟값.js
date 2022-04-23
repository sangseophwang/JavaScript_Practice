function solution(s) {
  const number = s.split(" ").map((e) => Number(e));
  const max = Math.max(...number);
  const min = Math.min(...number);
  return `${min} ${max}`;
}
