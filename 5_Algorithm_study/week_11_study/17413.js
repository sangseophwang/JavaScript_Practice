const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const word = input.shift();
  const reg = /(<.+?>|\s)/g;
  const temp = word.split(reg);
  const answer = temp.map((word) => {
    return reg.test(word) ? word : word.split("").reverse().join("");
  });
  console.log(answer.join(""));
});

/*
  문자를 정규 표현식 기준으로 나눠준다.
  그리고 각 단어별로 reg.test(정규 표현식이 문자열에 존재하면 true, 없으면 false)를 통해
  문자에 정규 표현식이 있으면 그대로, 없으면 단어를 쪼개서 뒤집어주고 합쳐준다.
*/
