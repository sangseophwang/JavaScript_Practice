const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const [four, six] = input
    .shift()
    .split(" ")
    .map((e) => +e);
  // 4 6
  const alphabet = input[0].split(" ").sort();
  // a c i s t w
  const aeiou = new Set(["a", "e", "i", "o", "u"]);
  const answer = [];
  const dfs = (count, start, key, aeiouCnt) => {
    // 문자 길이,  , 단어, 모음 개수
    if (count === four) {
      // 4개가 됐을 때
      if (aeiouCnt < 1 || aeiouCnt > four - 2) return;
      // 모음이 1개도 없거나 모음이 3개 이상이면 pass
      answer.push(key);
      // 그게 아니면 answer에 추가
      return;
    }

    for (let i = start; i < six; i++) {
      const c = alphabet[i];
      dfs(count + 1, i + 1, key + [c], aeiouCnt + (aeiou.has(c) ? 1 : 0));
      // 0부터 시작해서 alphabet 배열의 글자를 순서대로 key 배열에 넣는데, 모음이 있으면 aeiouCnt에 1을,
      // 없으면 0을 더해준다.
    }
  };

  dfs(0, 0, [], 0);
  console.log(answer.sort().join("\n"));
});
