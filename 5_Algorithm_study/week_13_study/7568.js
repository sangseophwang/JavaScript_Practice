const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const men = arr.map((v, i) => ({
  weight: v.split(" ")[0],
  height: v.split(" ")[1],
  rank: 1,
}));
for (let i = 0; i < men.length; i++) {
  for (let j = 0; j < men.length; j++) {
    if (
      i !== j &&
      men[i].weight < men[j].weight &&
      men[i].height < men[j].height
    )
      men[i].rank++;
  }
}
console.log(men.map((i) => i.rank).join(" "));
