// 카드 2

// 정수 4가 주어질 때 1이 제일 위, 4번 카드가 제일 아래인 상태로 놓여있다.
// 1을 pop해주면 234가 남고, 2를 맨 뒤로 옮긴다. 342가 된다.
// 3을 pop해주면 42가 남고, 4를 맨 뒤로 옮긴다. 24가 된다.
// 2를 pop해주면 4가 남는다.

const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

let queue = [];

for (let i = 1; i <= input; i++) {
  queue.push(i);
}

while (queue.length) {
  if (queue.length !== 1) {
    queue.shift();
    queue.push(queue.shift());
  }
  if (queue.length === 1) {
    break;
  }
}
console.log(queue.join());

let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let card = [];
// 처음에 카드가 1~N까지 순서대로 놓여져 있음
// 제일 위에 있는 카드 = card 배열의 인덱스 0에 있는 카드
for (let num = 1; num <= input; num++) {
  card.push(num);
}

// 카드가 한 장 남을 때까지 반복
let top = 0;
while (top < card.length - 1) {
  // 제일 위에 있는 카드를 바닥에 버린다
  top += 1;
  // 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다
  card.push(card[top]);
  top += 1;
}

console.log(card[top]);
