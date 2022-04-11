// 다음 코드를 동작하게 만드세요.
// duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(array) {
  return array.concat(array);
}

console.log(duplicate([1, 2, 3, 4, 5]));
