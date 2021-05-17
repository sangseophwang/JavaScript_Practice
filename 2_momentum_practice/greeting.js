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
