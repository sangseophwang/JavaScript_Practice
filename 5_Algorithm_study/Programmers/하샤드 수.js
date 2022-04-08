function solution(x) {
  const divide = x.toString().split('').map(e=>Number(e)).reduce((acc, cur) => acc + cur);
  return x%divide === 0 ? true : false;
}