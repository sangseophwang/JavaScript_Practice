function solution(price, money, count) {
  let answer = 0;
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }
  if (money - total >= 0) return 0;
  else return total - money;
}
