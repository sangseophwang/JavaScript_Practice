// N과 M(4)
// i만 1로 바꾸면 됨.

const [N, M] = require('fs').readFileSync('test.txt').toString().split(' ').map(x=>+x);

const visited = new Array(N);
const output = [];
let result = '';

function dfs(index, count) {
  if (count === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = index; i < N; i++) {
    output.push(i + 1);
    dfs(i, output.length);
    output.pop();
  }
}

dfs(0, 0);
console.log(result);



// //[15652] N과 M (4) 2019.06.29 토 11:21
// var line = require("fs").readFileSync("/dev/stdin", "utf8");
// //var line = require("fs").readFileSync("./15649.txt", "utf8");
// var data = line.trim().split(" ");
// var N = parseInt(data[0]); //4
// var L = parseInt(data[1]); //2
// var str = ""; //스트링버퍼역할
// var fnc = function(arr, startIdx, value, L) {
//   if (L == 0) {
//     var temp = "";
//     for (var idx in arr) {
//       temp += arr[idx] + " ";
//     }

//     str = str + temp.trim() + "\n";
//     return;
//   }
//   /**
//    *
//    * startIdx : 값 저장 배열 인덱스 - L 문자열 길이제한까지 +1씩 증가시킴
//    * value : 할당된 자기자신값을 넘기는데 시작점이 되야됨
//    *
//    * */

//   for (var i = value; i <= N; i++) {
//     arr[startIdx] = i;
//     fnc(arr, startIdx + 1, i, L - 1);
//   }
// };

// var arr = [];
// fnc(arr, 0, 1, L);
// console.log(str);