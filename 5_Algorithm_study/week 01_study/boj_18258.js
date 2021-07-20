// 큐2

// 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const queue = [];
let first = 0;
let end = 0;
let result = "";
for (let inputData of input) {
  const [firstInput, inputNum] = inputData.split(" ");
  switch (firstInput) {
    case "push":
      queue.push(inputNum);
      end++;
      break;
    // push이면 정수 x를 큐에 넣는다.
    // 그리고 end에 1을 더해줘서 현재 큐에 1개 있다는 것을 적어놓는다.
    case "pop":
      if (first < end) result += queue[first++] + "\n";
      else result += "-1\n";
      break;
    // first가 end보다 작다는 것은 데이터가 있다는 뜻, 있으면 큐의 first번째를 result에 옮기고 first에 1을 더해준다.
    // 왜냐하면 큐에 0번째는 이제 없기 때문이다 !!!
    // 비어있다면 -1을 출력한다.
    case "size":
      result += (end - first).toString() + "\n";
      break;
    // 문자로 바꿔서 넣어준다.
    case "empty":
      if (first < end) result += "0\n";
      else result += "1\n";
      break;
    // end가 1 이상이면 큐에 1개 이상 들어있다는 뜻, 그러므로 0을 출력하고 비어있다면 1을 출력한다.
    case "front":
      if (first < end) result += queue[first] + "\n";
      else result += "-1\n";
      break;
    case "back":
      if (first < end) result += queue[end - 1] + "\n";
      else result += "-1\n";
      break;
    // 0부터 시작하니까 end-1번째 결과를 result에 넣는다.
  }
}
console.log(result);
