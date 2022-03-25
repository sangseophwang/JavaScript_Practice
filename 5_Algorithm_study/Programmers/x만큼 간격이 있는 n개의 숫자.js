function solution(x, n) {
  const array = Array(n).fill(0);
  for (let i = 1; i <= n; i++) {
    array[i - 1] = x * i;
  }
  return array;
}

// 다른 사람의 풀이
function solution(x, n) {
  return Array(n)
    .fill(0)
    .map((v, i) => (i + 1) * v);
}
