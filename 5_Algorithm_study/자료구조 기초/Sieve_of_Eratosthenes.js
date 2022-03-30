// O(sqrt(n));
// 소수 판별법
// 그 어떤 소수도 N의 제곱근보다 큰 수로 나눠지지 않는다!!
// ex) 17 => 4*4까지가 끝 => 2,3,4로만 확인해보면 된다.
function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(13));

// O(n log log n)
// 1부터 N까지 모든 소수를 구하는 경우 가장 효율적이다.

function getPrimes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.flatMap((v, i) => (v ? i : []));
}

console.log(getPrimes(30));
