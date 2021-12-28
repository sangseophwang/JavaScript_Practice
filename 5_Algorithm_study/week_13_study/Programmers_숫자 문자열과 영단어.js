function solution(s) {
  let answer = s;
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < numbers.length; i++) {
    let array = answer.split(numbers[i]);
    answer = array.join(i);
  }
  return Number(answer);
}
