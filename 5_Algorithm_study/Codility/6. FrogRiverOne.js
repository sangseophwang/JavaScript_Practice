function solution(X, A) {
  const set = new Set();

  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    set.add(value);

    if (set.size === X) {
      return i;
    }
  }

  return -1;
}
