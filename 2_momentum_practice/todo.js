const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

/* paintToDo(text) 해석

    handleSubmit(event) 를 통해 만들어진 currentValue 가 넘어오면
    1. 우선 <li>, <button>, <span> 을 만든다.
    2. <li> 태그 안에 <button> 과 <span> 이 들어간다.
    3. currentValue는 span 안으로 들어간다.
    4. toDoList에 li를 넣도록 설정한다.
    5. li 에는 id를 만들어서 toDo array에 추가되는 개수 + 1 이 담기도록 한다. (넘버링)
    6. toDoObject 에는 text: currentValue, id: toDo 개수가 담기도록 한다. 
    7. toDos 에 toDoObject 데이터를 보내고 saveToDos 를 통해 localstorage에 저장하도록 한다.
*/

let idNumbers = 1;

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = idNumbers;
  idNumbers += 1;
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObject = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObject);
  saveToDos();
}

/* handleSubmit(event) 해석

    input에 내용을 쓰고 엔터(submit)를 하면 
    1. 우선 자동으로 데이터가 넘어가는걸 막고 (event.preventDefault())
    2. paintToDo 함수에 데이터를 넘긴다.
    3. 그리고 Input 창을 비워서 다음 내용을 쓸 수 있도록 만든다.
*/

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

/* loadToDos 해석

    localstorange에 있는 toDo 리스트를 불러오는데,
    1. 리스트에 값이 있으면 localstorage 에 있던 string을 다시 array로 만들고
    2. forEach로 각 리스트 값을 다시 화면에 불러온다. paintToDo(currentValue)
*/

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();

// 이모지 입력 방법 : cmd + control + space
