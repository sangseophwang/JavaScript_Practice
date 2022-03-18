class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // enqueue : 큐에 요소 추가. 현재 마지막 인덱스를 +1해주고 queue에 값을 넣어준다.
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // dequeue : 큐 맨 앞 요소 출력. 가장 앞 요소를 변수로 하나 만들어주고 큐에서 삭제한 다음 front를 하나 증가시켜준다.
  // 마지막으로 변수 value를 출력해주면 끝!
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  // 현재 가장 앞에 있는 queue 요소 출력
  peek() {
    return this.queue[this.front];
  }

  // 끝 요소 인덱스와 앞 요소 인덱스를 빼주면 큐 사이즈 출력 가능.
  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue()); //1
queue.enqueue(9);
console.log(queue.size()); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 4
