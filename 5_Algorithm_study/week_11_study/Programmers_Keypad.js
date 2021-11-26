function getDistance(pos, index) {
  return Math.ceil(
    Math.sqrt(Math.pow(pos[0] - index[0], 2) + Math.pow(pos[1] - index[1], 2))
  );
}

function solution(numbers, hand) {
  let answer = "";

  let left = [1, 4, 7];
  let right = [3, 6, 9];
  let center = [2, 5, 8, 0];

  let LPos = [3, 0];
  let RPos = [3, 2];

  numbers.map((number) => {
    if (left.includes(number)) {
      //왼손으로 눌러야할 때
      answer += "L";
      LPos = [left.indexOf(number), 0];
    } else if (right.includes(number)) {
      //오른손으로 눌러야할 때
      answer += "R";
      RPos = [right.indexOf(number), 2];
    } else {
      //두 손중 하나를 선택할 때
      const index = [center.indexOf(number), 1]; //눌러야 하는 번호의 위치

      const LDist = getDistance(LPos, index); //왼손과의 거리
      const RDist = getDistance(RPos, index); //오른손과의 거리

      if (LDist > RDist) {
        //오른손이 거 가까이 있으면
        answer += "R"; //R을 추가하고
        RPos = index; //오른손을 타겟 번호위치로 이동
      } else if (RDist > LDist) {
        //왼손이 더 가까이 있으면
        answer += "L";
        LPos = index;
      } else {
        //거리가 같을때
        if (hand === "right") {
          //hand가 right이면
          answer += "R";
          RPos = index;
        } else {
          //hand가 left이면
          answer += "L";
          LPos = index;
        }
      }
    }
  });

  return answer;
}
