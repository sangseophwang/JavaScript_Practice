// const messageList = document.querySelector("ul");
// const nicknameForm = document.querySelector("#nickname");
// const messageForm = document.querySelector("#message");

// const socket = new WebSocket(`ws://${window.location.host}`);

// function handleOpen() {
//   console.log("Connected to Server");
// }

// function makeMessage(type, payload) {
//   const message = { type, payload };
//   return JSON.stringify(message);
// }

// function handleMessage(message) {
//   const li = document.createElement("li");
//   li.innerText = message.data;
//   messageList.append(li);
// }

// function handleClose() {
//   console.log("Disconnected to Server");
// }

// function handleNicknameSubmit(event) {
//   event.preventDefault();
//   const input = nicknameForm.querySelector("input");
//   socket.send(makeMessage("nickname", input.value));
//   input.value = "";
// }

// function handleMessageSubmit(event) {
//   event.preventDefault();
//   const input = messageForm.querySelector("input");
//   socket.send(makeMessage("new_message", input.value));
//   const li = document.createElement("li");
//   li.innerText = `You: ${input.value}`;
//   messageList.append(li);
//   input.value = "";
// }

// socket.addEventListener("open", handleOpen);
// socket.addEventListener("message", handleMessage);
// socket.addEventListener("close", handleClose);

// nicknameForm.addEventListener("submit", handleNicknameSubmit);
// messageForm.addEventListener("submit", handleMessageSubmit);

// const sockets = [];
// const wss = new WebSocket.Server({ server });
// function onSocketClose() {
//   console.log("Disconnected from the Browser");
// }
// wss.on("connection", (socket) => {
//   sockets.push(socket);
//   socket["nickname"] = "Anonymous";
//   console.log("Connected to Browser");
//   socket.on("close", onSocketClose);
//   socket.on("message", (msg) => {
//     const message = JSON.parse(msg);
//     switch (message.type) {
//       case "new_message":
//         sockets.forEach((aSocket) =>
//           aSocket.send(`${socket.nickname}: ${message.payload}`)
//         );
//         break;
//       case "nickname":
//         socket["nickname"] = message.payload;
//         break;
//     }
//   });
// });