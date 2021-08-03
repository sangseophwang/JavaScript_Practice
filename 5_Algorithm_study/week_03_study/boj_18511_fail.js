// 큰 수 구성하기
// 모르겠다 ㅠ 순열 쪽으로 더 공부하고 풀어야할 것 같다 ㅠ

const input = require('fs').readFileSync('test.txt').toString().trim().split('\n')
const [num, size] = input[0].split(' '). map(e => +e)
const array = input[1].split(' ')
let max = 0;
const length = String(num).length;

// for (let i = 0; i < size; i++) {
//   for (let j = 0; j < size; j++) {
//     for (let k = 0; k < size; k++) {
//       const a = array[i]
//       const b = array[j]
//       const c = array[k]
//       if (N )
//       else if (num >= maxnum && maxnum < 1000 && maxnum >= max) {
//         let maxnum = Number(a+b+c)
//         max = maxnum
//       }
//     }
//   }
// }
// console.log(max)