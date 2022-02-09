function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    const slicedArray = array.slice(commands[i][0] - 1, commands[i][1]);
    slicedArray.sort((a, b) => a - b);
    answer.push(slicedArray[commands[i][2] - 1]);
  }
  return answer;
}
