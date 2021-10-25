function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1; // 15
  let right = n * times[times.length - 1]; // 60 29
  let answer = right; // 최대값. 60 29
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // 30 14
    let count = 0;
    times.forEach((value) => {
      count += Math.floor(mid / value); // 한 사람당 몇명 할 수 있는지
      // 30 / 7 + 30 / 10 = 7  14/7 + 14/10 = 3
      if (count >= n) {
        answer = Math.min(mid, answer); // 최솟값
        return;
      }
    });
    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
