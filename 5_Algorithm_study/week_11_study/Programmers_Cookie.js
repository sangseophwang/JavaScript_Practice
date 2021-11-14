function solution(cookie) {
  const temp = [0];
  let sum = 0;
  for (let i = 0; i < cookie.length; i++) {
    sum += cookie[i];
    temp.push(sum);
  }
  let max = 0;
  for (let m = 0; m < temp.length; m++) {
    let c = temp[m];
    for (let r = m + 1; r < temp.length; r++) {
      let right = temp[r] - c;
      if (max >= right || c < right) continue;
      for (let l = 0; l < m; l++) {
        if (c - temp[l] < right) break;
        if (c - temp[l] === right) {
          max = Math.max(max, right);
          break;
        }
      }
    }
  }

  return max;
}
