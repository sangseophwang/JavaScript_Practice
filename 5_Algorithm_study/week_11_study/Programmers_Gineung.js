function solution(progresses, speeds) {
  let answer = [];

  while (speeds.length > 0) {
    // 스피드 배열을 기준으로 0이되면 종료
    for (let i = 0; i < speeds.length; i++) {
      // 각 스피드에 맞게 기능을 하나씩 추가
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }
    let count = 0;
    while (progresses[0] >= 100) {
      // 100이넘으면 shift, 다음 기능이 100이 되어도 shift
      progresses.shift();
      speeds.shift();
      count++;
    }
    if (count > 0) {
      // 결과 배열에 넣어주기
      answer.push(count);
    }
  }
  return answer;
}
