// 나는야 포켓몬 마스터 이다솜

// input을 받아와서 리스트로 만들고 첫번째 수만큼 빼서 리스트 새로 만듬.
// 가능하면 문제도 따로 리스트로.
// 그리고 문제를 for문으로 하나씩 돌리는데,
// 숫자가 나오면 그 숫자 - 1 번째 포켓몬을 출력해주고
// 문자가 나오면 그 문자의 indexOf를 해서 출력한다.

// 내가 썼던 답
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [pokemon, question] = input[0].split(" ").map((e) => +e);

let pokemonList = [];
let questionList = [];
for (i = 1; i <= pokemon; i++) {
  pokemonList.push(input[i]);
}

for (i = 1; i <= question; i++) {
  questionList.push(input[pokemon - 1 + i]);
}

for (i = 0; i < questionList.length; i++) {
  if (questionList[i] === Number) {
    console.log(pokemonList[questionList[i]]);
  } else {
    console.log(pokemonList.indexOf(questionList[i]));
  }
}

// 정답

let question = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let answer = [];
const sumPokemon = Number(question[0].split(" ")[0]);
// 포켓몬 수
let pokemonList = question.splice(1, sumPokemon);
// 포켓몬 리스트 (1번부터 sumPokemon까지 싹 빼온다.)
question.splice(0, 1);
// question 첫번쨰 값을 없앤다. (26 5)
// 이러면 question에는 5개의 문제만 남는다!
// 진정한 의미의 question이랄까?
let dict = {};
// 딕셔너리 만들어주시고
for (let i = 0; i < sumPokemon; ++i) {
  dict[pokemonList[i]] = i + 1;
  dict[i + 1] = pokemonList[i];
  // 딕셔너리에 두가지를 넣을껀데, {"포켓몬 이름": 숫자}, {숫자:포켓몬 이름} 이렇게 두가지씩 들어갈 거다.
}
question.map((e) => {
  answer.push(dict[e]);
  // 딕셔너리 키에 숫자, 포켓몬 둘 다 들어가 있으니까 마음껏 매핑하기
});
console.log(answer.join("\n"));
