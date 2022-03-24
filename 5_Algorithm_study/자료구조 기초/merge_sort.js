// 분할 정복 알고리즘의 하나.
// 하나의 리스트를 두 개의 균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음,
// 두 개의 정렬된 부분 리스트를 합해 전체가 정렬된 리스트가 되게 하는 방법.
// best : O(n logn) / worst : O(n logn)

// 결합
const merge = (a, b) => {
  if (a.length === 0) return b;
  else if (b.length === 0) return a;
  else if (a[0] < b[0]) return [a[0], ...merge(a.slice(1), b)];
  else return [b[0], ...merge(a, b.slice(1))];
};

// 분해
const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  else {
    const mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  }
};

console.log(mergeSort([21, 10, 12, 20, 25, 13, 15, 22]));
