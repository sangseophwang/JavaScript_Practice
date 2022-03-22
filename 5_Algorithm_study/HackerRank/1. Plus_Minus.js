function plusMinus(arr) {
  const length = arr.length;
  let plus = 0;
  let minus = 0;
  let zero = 0;
  for (let value of arr) {
    if (value > 0) plus++;
    else if (value < 0) minus++;
    else zero++;
  }

  console.log(Number(plus / length).toFixed(6));
  console.log(Number(minus / length).toFixed(6));
  console.log(Number(zero / length).toFixed(6));
}

// 내가 푼 풀이

function plusMinus(arr) {
  const length = arr.length;
  arr.sort((a, b) => a - b);
  let array = [0, 0, 0];
  for (let i = 0; i < length; i++) {
    if (arr[i] < 0) array[1] = array[1] + 1;
    else if (arr[i] === 0) array[2] = array[2] + 1;
    else array[0] = array[0] + 1;
  }
  for (let i of array) {
    console.log((i / length).toFixed(6));
  }
}
