function solution(seoul) {
  const index = seoul.findIndex((element) => element === "Kim");
  return `김서방은 ${index}에 있다`;
}

// 다른 사람의 풀이

function solution(seoul) {
  return "김서방은 " + seoul.indexOf("Kim") + "에 있다";
}
