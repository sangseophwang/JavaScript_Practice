const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

function binarySearch(array, findValue) {
  // left, right, mid 인덱스 위치 생성
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  // left가 right 보다 작으면 반복 실행
  while (left < right) {
    // mid번째 array 요소가 찾는 값이랑 같으면 mid(인덱스) 출력
    if (array[mid] === findValue) return mid;

    // mid번째 array 요소가 찾는 값보다 작으면 left를 mid보다 하나 더 큰 값으로 변경
    if (array[mid] < findValue) left = mid + 1;
    // 반대로 mid번째 array 요소가 찾는 값보다 크면 right을 mid보다 하나 더 작은 값으로 변경
    else right = mid - 1;

    // 위에서 조건에 따라 left right을 조정해준 후 mid값 재설정
    mid = Math.floor((left + right) / 2);
  }

  // 값이 없으면 -1 리턴.
  return -1;
}
