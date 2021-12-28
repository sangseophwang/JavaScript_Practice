function solution(nums) {
  let answer = 0;
  let sum = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let temp = nums[i] + nums[j] + nums[k];
        sum.push(temp);
      }
    }
  }
  for (let i = 0; i < sum.length; i++) {
    if (isPrime(sum[i])) answer++;
  }
  function isPrime(sum) {
    for (let i = 2; i + i <= sum; i++) {
      if (sum % i === 0) return false;
    }
    return true;
  }
  return answer;
}
