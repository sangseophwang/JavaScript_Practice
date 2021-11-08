function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;
  while (left < right) {
    let sum = people[left] + people[right];
    if (sum > limit) left++;
    else {
      left++;
      right--;
    }
    answer++;
  }
  if (left === right) answer++;
  return answer;
}

/*
  첫 수와 마지막 수를 더한 값을 구하고
  limit을 넘으면 다음 수로 가도록 left를 더한다.
  limit을 넘지 않으면 양 끝에서 다음 수로 가도록 한다.
  혼자 탄 배나 같이 탄 배에 추가하기 위해 answer++;
*/
