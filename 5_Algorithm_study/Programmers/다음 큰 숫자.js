function solution(n) {
  const Num = n.toString(2).split("1").length;
  while (true) {
    n++;
    if (n.toString(2).split("1").length === Num) return n;
  }
}
