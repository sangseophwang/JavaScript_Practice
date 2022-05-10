const [m, k] = require("fs")
    .readFileSync(0, "utf-8")
    .split(" ")
    .map((e) => +e),
  arr = Array(m)
    .fill(0)
    .map((e, i) => i + 1);
let i = 0,
  order = [];
while (arr.length) {
  i = (i + k - 1) % arr.length;
  order.push(arr.splice(i, 1));
}
console.log(`<${order.join(", ")}>`);
