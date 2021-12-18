let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let numbers = [];
input.forEach(function (value) {
  numbers.push(Number(value));
});

for (let i = 0; i < 3; i++) {
  for (let j = i + 1; j < 3; j++) {
    if (numbers[i] > numbers[j]) {
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

console.log(numbers[1]);
