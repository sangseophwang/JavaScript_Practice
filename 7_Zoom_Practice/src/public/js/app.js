const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function addMessage(message) {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = message;
  ul.appendChild(li);
}

function handleMessageSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#msg input");
  socket.emit("new_message", input.value, roomName, () => {
    addMessage(`You: ${input.value}`);
    input.value = "";
  });
}

function handleNicknameSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#name input");
  socket.emit("nickname", input.value);
}

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
  const msgForm = room.querySelector("#msg");
  const nameForm = room.querySelector("#name");
  msgForm.addEventListener("submit", handleMessageSubmit);
  nameForm.addEventListener("submit", handleNicknameSubmit);
}

function handleRoomSubmit(event) {
  const roomInput = form.querySelector("#roomName");
  const nicknameInput = form.querySelector("#nickname");
  event.preventDefault();
  socket.emit("enter_room", roomInput.value, nicknameInput.value, showRoom);
  roomName = roomInput.value;
  roomInput.value = "";
  const changeNicknameInput = room.querySelector("#name input");
  changeNicknameInput.value = nicknameInput.value;
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("Welcome", (user) => {
  addMessage(`${user} joined!`);
});

socket.on("Bye", (user) => {
  addMessage(`${user} left T_T`);
});

socket.on("new_message", addMessage);
