function miniMaxSum(arr) {
  const array = arr.sort((a, b) => a - b);
  const totalSum = array.reduce((acc, cur) => acc + cur, 0);
  console.log(`${totalSum - array[array.length - 1]} ${totalSum - array[0]}`);
}
