function solution(A, K) {
  for (let i = 0, k = K % A.length || 0; i < k; i++) {
    A.unshift(A.pop());
  }
  return A;
}
