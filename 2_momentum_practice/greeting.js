const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const APPLICATION_KEY_NAME = "Name",
  SHOWING_CLASSNAME = "showing";

function saveName(text) {
  localStorage.setItem(APPLICATION_KEY_NAME, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CLASSNAME);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CLASSNAME);
  greeting.classList.add(SHOWING_CLASSNAME);
  greeting.innerText = `Hello, ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(APPLICATION_KEY_NAME);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

/* 헤설 :

  우선 이름을 입력할 수 있는 <form>, <input> 태그를 만들고 따로 <h4> 태그를 만든다. 그리고 각각 form, input, greeting 으로 지칭한다.
  그리고 css 를 통해 form과 input 을 숨기고 showing 이라는 클래스가 생기면 그 때 보이도록 설정한다. 
  APLICATION_KEY_NAME 이 없으면 showing 클래스를 form 에 붙여서 질문 칸이 나오도록 하고, 입력한 값이 localStorage에 저장이 돼서 
  APLICATION_KEY_NAME과 그 값이 생기면 질문 칸이 사라지고 'Hello ${text}' 가 나오도록 한다.


*/
