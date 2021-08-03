//블랙잭
// 입력값으로 주어지는 수와 비교해 3개의 카드를 더한 수의 최대값을 구하는 문제

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(e => +e);
const n = input[0];
const m = input[1];
const cards = input.slice(2);
let sum = 0;
for(i=0; i<cards.length-2; i++) {
    for(j=i+1; j<cards.length-1; j++) {
        for(k=j+1; k<cards.length; k++) {
            if(cards[i]+cards[j]+cards[k] <= m && cards[i]+cards[j]+cards[k] > sum) {
                sum = cards[i]+cards[j]+cards[k];
            }
        }
    }
}
console.log(sum);