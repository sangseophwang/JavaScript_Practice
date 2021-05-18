const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${
    seconds < 10 ? `0${seconds}` : seconds
    // ternary operator(삼항연산자) / 작은 if
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

/* 해설:

  처음에 js-clock 이라는 <div> 클래스와 00:00 이 써있는 h1 태그를 각각 clockContainer, clockTitle 로 불러온다.
  그리고 getTime() 이라는 함수를 만드는데, 우선   new Date()     라는건 '인수를 전달하지 않으면 현재 날짜와 시간을 가지는 인스턴스를 반환한다' 라는 뜻이다.
  그렇게 const date 를 하고, 다음 줄줄이 시, 분, 초 를 불러온다.
  clockTitle.innerText 라는건 그 다음부터 적을 내용으로 h1의 내용 (00:00) 이 바뀐다는건데, 
  상황연산자라는 if의 역할을 하는 연산자를 이용해, '각 시간에 나오는 숫자가 10보다 작으면 앞에 0을 붙이고, 그렇지 않다면 그대로 수를 내보낸다' 라고 명령한다.

  마지막으로 init함수를 만들어 getTime 함수를 불러오고, setInterval를 통해 1초당 변하는 구조로 만들면 실시간 시계 기능이 완성된다.

  */
