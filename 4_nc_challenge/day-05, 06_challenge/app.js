const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoFinished = document.getElementById("todo-finished");

// 배열은 항상 모든 함수 위에 위치하도록 해야 한다.
// To-do list는 배열이 되어야 여러개를 저장할 수 있다.
let pending = [];
let finished = [];

// localStorage 키
// 단순한 string을 저장한 상수로 대문자로 해서 표현한다. 오타 방지와 틀렸을 경우 에러창이 뜨도록 하기 위해 사용한다.
const PENDING_KEY = "PENDING";
const FINISHED_KEY = "FINISHED";

//시작하자마자 실행되는 함수.
function runToDo() {
  // 저장해놨던 값들을 불러온다.
  const savedToDos = localStorage.getItem(PENDING_KEY);
  const savedFinished = localStorage.getItem(FINISHED_KEY);

  if (savedToDos !== null) {
    // 문자열로 저장돼있던 객체를 다시 진짜 객채로 만들어준다.
    const parsedToDos = JSON.parse(savedToDos);

    // 각 배열 요소들에게 text를 다시 불러오라고 실행한다.
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }

  if (savedFinished !== null) {
    const parsedFinished = JSON.parse(savedFinished);
    parsedFinished.forEach(function (toDo) {
      paintFinished(toDo.text);
    });
  }
}

function init() {
  runToDo();
  toDoForm.addEventListener("submit", handleToDoSubmit);
}

//실행!
init();

/*-----------------------------------------------*/

//input에 할일을 쓰고 submit(엔터)을 하면
function handleToDoSubmit(event) {
  // 일단 기본 input의 모든 기능을 멈추고
  event.preventDefault();

  // input에 쓴 텍스트를 저장한 다음
  const newToDo = toDoInput.value;

  // 비운다.
  toDoInput.value = "";

  // 그리고 이 텍스트를 가지고 작동할 함수에게 보낸다.
  paintToDo(newToDo);
}

function paintToDo(newToDo) {
  // li 태그와 할당될 id를 만들어준다. id값은 pending에 추가될 때마다 1씩 증가하도록 설정해서 겹치지 않는다.
  const li = document.createElement("li");
  const newId = pending.length + 1;
  li.id = newId;

  // 텍스트가 올 span 태그를 만들어준다.
  const span = document.createElement("span");
  span.innerText = newToDo;

  // 삭제 버튼을 만들어주고 클릭하면 deleteToDo 함수가 발동되도록 설정한다. (1-1번으로 가시오.)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo);

  // 완료 버튼을 만들어주고 클릭하면 moveToFinished 함수가 발동되도록 설정한다.  (1-2번으로 가시오.)
  const finishedButton = document.createElement("button");
  finishedButton.innerText = "📂";
  finishedButton.addEventListener("click", moveToFinished);

  // li 태그 안에 차례대로 추가되도록 해놓고
  li.appendChild(span);
  li.appendChild(deleteButton);
  li.appendChild(finishedButton);

  // 마지막에 toDoList ul 태그 안에 list가 생성되도록 한다.
  toDoList.appendChild(li);

  // pending array에 저장할 수 있도록 객체를 만든다.
  const newToDoObj = {
    text: newToDo,
    id: newId,
  };

  // 그 객체를 pending 배열로 보내고
  pending.push(newToDoObj);

  // 저장한다.
  saveToDos();
}

//localStorage는 텍스트만 저장될 수 있다. 그래서 array 상태인 pending 을 JSON.stringify 를 통해 문자 상태처럼 보이는 배열로 바꿔준다.
function saveToDos() {
  localStorage.setItem(PENDING_KEY, JSON.stringify(pending));
}

/*- 1-1번 --*/

function deleteToDo(event) {
  // 클릭한 버튼의 부모 태그를 불러와서
  const li = event.target.parentElement;

  // 지운다.
  li.remove();

  // 그리고 li태그의 id와 같지 않은 아이들만 모아서 다시 저장한다.
  pending = pending.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

/*- 1-2번 --*/

function moveToFinished(event) {
  // 클릭한 버튼의 부모 태그를 불러와서
  const li = event.target.parentElement;

  // 그 부모의 텍스트를 가져온다.
  const liText = li.firstChild.innerText;

  // 1-1 번을 실행시키고
  deleteToDo(event);

  // 가져온 텍스트만 가지고 paintFinished 함수로 간다.
  paintFinished(liText);
}

/*------------------------------------*/

function paintFinished(liText) {
  // 위와 동일한 방식으로 li 태그를 만들어주고
  const li = document.createElement("li");
  const newId = finished.length + 1;
  li.id = newId;

  // 이 span 태그에 가져온 liText 를 집어넣는다.
  const span = document.createElement("span");
  span.innerText = liText;

  // 위와 동일한 삭제 버튼을 만들어준다.                             (2-1번으로 가시오.)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteFinished);

  // 다시 pending으로 돌리는 버튼을 만들어준다.                      (2-2번으로 가시오.)
  const returnButton = document.createElement("button");
  returnButton.innerText = "↩️";
  returnButton.addEventListener("click", returnPending);

  // 위와 동일하게 li 태그에 붙여주고, 그 li태그를 toDoFinished ul 태그에 넣는다.
  li.appendChild(span);
  li.appendChild(deleteButton);
  li.appendChild(returnButton);
  toDoFinished.appendChild(li);

  // 그리고 가져온 liText로 새로운 객체를 만들어서
  const toDoObj = {
    text: liText,
    id: newId,
  };

  // finished 배열에 넣어주고 저장한다.
  finished.push(toDoObj);
  saveFinished();
}

function saveFinished() {
  localStorage.setItem(FINISHED_KEY, JSON.stringify(finished));
}

/*- 2-1번 --*/

function deleteFinished(event) {
  const li = event.target.parentElement;
  li.remove();
  finished = finished.filter((toFinished) => toFinished.id !== parseInt(li.id));
  saveFinished();
}

/*- 2-2번 --*/

function returnPending(event) {
  const li = event.target.parentElement;
  const liText = li.firstChild.innerText;
  deleteFinished(event);
  paintToDo(liText);
}
