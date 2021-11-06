const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const T = +input.shift();
  const answer = [];
  for (let i = 0; i < T; i++) {
    let [W, K] = input.slice(i * 2, i * 2 + 2);
    K = +K;
    let shortest = Infinity;
    let ht = new Map();
    let start = 0,
      end = 0;

    while (end < W.length) {
      const word = W[end];
      if (!ht.has(word)) ht.set(word, 0);
      ht.set(word, ht.get(word) + 1);
      if (ht.get(word) === K) {
        while (W[start] !== word) {
          ht.set(W[start], ht.get(W[start]) - 1);
          start++;
        }
        const len = end - start + 1;
        shortest = Math.min(shortest, len);
        ht.set(W[start], ht.get(W[start]) - 1);
        start++;
      }
      end++;
    }
    if (shortest === Infinity) {
      answer.push(-1);
      continue;
    }

    let longest = -1;
    ht = new Map();
    for (let i = 0; i < W.length; i++) {
      const word = W[i];
      if (!ht.has(word)) ht.set(word, []);
      ht.set(word, [...ht.get(word), i]);
      const count = ht.get(word).length;
      if (count >= K) {
        const len = ht.get(word)[count - 1] - ht.get(word)[count - K] + 1;
        longest = Math.max(longest, len);
      }
    }
    answer.push([shortest, longest].join(" "));
  }
  console.log(answer.join("\n"));
});
