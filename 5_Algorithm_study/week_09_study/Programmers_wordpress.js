function solution(s) {
  let strings = [];

  for (let i = 0; i < s.length; i++) {
    let num = i + 1;
    let count = 1;
    let string = "";
    for (let j = 0; j < s.length; j = j + num) {
      const currentWord = s.substring(j, j + num);
      const nextWord = s.substring(j + num, j + num + num);
      if (currentWord === nextWord) count++;
      else {
        string =
          count !== 1 ? string + count + currentWord : string + currentWord;
        count = 1;
      }
    }
    strings.push(string.length);
  }
  return Math.min(...strings);
}
