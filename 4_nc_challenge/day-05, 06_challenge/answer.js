const pendingList = document.getElementById("js-pending"),
  finishedList = document.getElementById("js-finished"),
  form = document.getElementById("js-form"),
  input = form.querySelector("input");

const PENDING = "PENDING";
const FINISHED = "FINISHED";

let pendingTasks, finishedTasks;

function getTaskObject(text) {
  return {
    id: String(Date.now()),
    text,
  };
}

// 저장소에 보낸다.
function savePendingTask(task) {
  pendingTasks.push(task);
}

// 내가 선택한 것 구하기
function findInFinished(taskId) {
  return finishedTasks.find(function (task) {
    return task.id === taskId;
  });
}

function findInPending(taskId) {
  return pendingTasks.find(function (task) {
    return task.id === taskId;
  });
}

// 내가 선택한 것 빼고 나머지 구하기
function removeFromPending(taskId) {
  pendingTasks = pendingTasks.filter(function (task) {
    return task.id !== taskId;
  });
}

function removeFromFinished(taskId) {
  finishedTasks = finishedTasks.filter(function (task) {
    return task.id !== taskId;
  });
}

// 저장소에 보낸다.
function addToFinished(task) {
  finishedTasks.push(task);
}

// 저장소에 보낸다.
function addToPending(task) {
  pendingTasks.push(task);
}

// 삭제 버튼을 누르면 먼저 li 태그를 지우고 양쪽 저장소의 데이터를 모두 지우고 상태를 저장한다.
function deleteTask(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  removeFromFinished(li.id);
  removeFromPending(li.id);
  saveState();
}

// 완료 버튼을 누르면 먼저 li 태그를 지우고 pending 저장소도 지운 다음 finished 저장소에 저장한다. 마지막으로 js-finished ul 태그에 넣는 작업을 한다.
function handleFinishClick(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInPending(li.id);
  removeFromPending(li.id);
  addToFinished(task);
  paintFinishedTask(task);
  saveState();
}

// 되돌아가기 버튼을 누르면 먼저 li 태그를 지우고 finished 저장소도 지운 다음 pending 저장소에 저장한다. 그리고 js-pending ul 태그에 넣는 작업을 한다.
function handleBackClick(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInFinished(li.id);
  removeFromFinished(li.id);
  addToPending(task);
  paintPendingTask(task);
  saveState();
}

// {id: 현재 시간, text: input.value} 라는 array를 list 태그에 정보를 부여하도록 분해한다.
function buildGenericLi(task) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  span.innerText = task.text;
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTask);
  li.append(span, deleteBtn);
  li.id = task.id;
  return li;
}

// 잘 만들어진 리스트에 완료 버튼을 추가해서 js-pending ul 태그에 올린다.
function paintPendingTask(task) {
  const genericLi = buildGenericLi(task);
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✅";
  completeBtn.addEventListener("click", handleFinishClick);
  genericLi.append(completeBtn);
  pendingList.append(genericLi);
}

// 잘 만들어진 리스트에 되돌리기 버튼을 추가해서 js-finished ul 태그에 올린다.
function paintFinishedTask(task) {
  const genericLi = buildGenericLi(task);
  const backBtn = document.createElement("button");
  backBtn.innerText = "⏪";
  backBtn.addEventListener("click", handleBackClick);
  genericLi.append(backBtn);
  finishedList.append(genericLi);
}

// 로컬스토리지 저장
function saveState() {
  localStorage.setItem(PENDING, JSON.stringify(pendingTasks));
  localStorage.setItem(FINISHED, JSON.stringify(finishedTasks));
}

// 불러오거나 저장된 것을 꺼낸다.
function loadState() {
  pendingTasks = JSON.parse(localStorage.getItem(PENDING)) || [];
  finishedTasks = JSON.parse(localStorage.getItem(FINISHED)) || [];
}

// 각각 저장돼있던 데이터 압축풀기
function restoreState() {
  pendingTasks.forEach(function (task) {
    paintPendingTask(task);
  });
  finishedTasks.forEach(function (task) {
    paintFinishedTask(task);
  });
}

// 제출하면  1. 동작을 막고, 2. id와 text가 있는 array를 만들어주고, 3. 가공해주는 곳에 보내고, 4. 압축 상태로 object에 저장한다.
function handleFormSubmit(e) {
  e.preventDefault();
  const taskObj = getTaskObject(input.value);
  input.value = "";
  paintPendingTask(taskObj);
  savePendingTask(taskObj);
  saveState();
}

// 일단 시작하면 작동할 함수, 저장된 것 불러올 함수, 복원할 함수를 켠다.
function init() {
  form.addEventListener("submit", handleFormSubmit);
  loadState();
  restoreState();
}
init();
