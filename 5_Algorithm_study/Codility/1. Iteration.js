function solution(N) {
  let binaryValue = N.toString(2);
  let count = 0;
  let gap = 0;

  for (let i = 1; i < binaryValue.length; i++) {
    if (binaryValue[i] === "0") {
      count++;
    } else {
      if (count > gap) {
        gap = count;
      }
      count = 0;
    }
  }
  return gap;
}
