function solution(arr) {
  return arr.filter((currentValue, index) => currentValue !== arr[index + 1]);
}
