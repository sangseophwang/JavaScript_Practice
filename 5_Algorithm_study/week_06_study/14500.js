var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

const solution = (N, M, board) => {
  let max = 0;
  let sum, x, y, flag;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (const blocks of Object.values(tetromino)) {
        sum = 0;
        flag = true;
        for (let k = 0; k < 4; k++) {
          [y, x] = blocks[k];
          if (y + i >= N || x + j >= M) {
            flag = false;
            break;
          }
          if (flag) sum += board[y + i][x + j];
        }
        max = Math.max(max, sum);
      }
    }
  }
  return max;
};

const [N, M] = input[0].split(' ').map((v) => Number(v));
const board = input.slice(1).map((v) => v.split(' ').map((v) => Number(v)));
console.log(solution(N, M, board));