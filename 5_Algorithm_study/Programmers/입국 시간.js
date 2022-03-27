/* 
로그 시간 = 이진 탐색
times => 선형 로그 시간으로 충분히 가능!

목표 : '최소 몇 분에 모든 심사가 끝나는가?'
ㄴ 결정 문제 = 이진 탐색 = Parametric Search

최소 1분에서 1억분 * n 사이

처리 가능한 입국자 n보다 작다면, 분을 올려야되고, 입국자가 n보다 크면 분을 낮춰야 한다.

*/

function solution(n, times) {
  // 우선 정렬해준다.
  const sortedTimes = times.sort((a, b) => a - b); // O(n logn)
  let left = 1;
  let right = n * sortedTimes[sortedTimes.length - 1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // sum([시간 / 심사시간])
    const sum = sortedTimes.reduce(
      (acc, time) => acc + Math.floor(mid / time),
      0
    );

    if (sum < n) left = mid + 1;
    else right = mid - 1;
  }

  return left;
}

console.log(solution(6, [7, 10]));
