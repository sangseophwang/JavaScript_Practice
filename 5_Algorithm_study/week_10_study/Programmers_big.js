function solution(numbers) {
  let answer = numbers
    .map((e) => e.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}

/*
  1. map으로 각 숫자를 문자로 치환
  2. sort((a,b) => (b+a)-(a+b)) = 문자로 변환된 숫자를 연결하여 비교정렬
    ( '3', '30' => ('303')-('330'))
  3. join('') = 문자 합치기
  4. answer가 0으로만 구성돼있을 경우 0으로 출력, 아니면 answer 출력

*/
