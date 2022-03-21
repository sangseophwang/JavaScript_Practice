function solution(A) {
  const length = A.length;

  if (length === 0) return 1;
  else {
    const realSum = ((length + 1) * (length + 2)) / 2;
    const missingSum = A.reduce((sum, e) => sum + e, 0);

    return realSum - missingSum;
  }
}

/*
시간 복잡도 : O(N) or O(N * log(N))

풀이 : A의 길이를 구하고 우선 예외 처리로 길이가 0이면 1을 출력하도록 설정한다.
그리고 해당 길이에 +1, +2 값을 곱하고 나눠서 실제로 빠진 수를 포함한 연속된 수 합을 구한다.
그리고 A의 합을 구해 빼주면 빠진 수를 알 수 있다.

*/
