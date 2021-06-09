const rangeNumber = document.querySelector("#rangeNumber");
const generateNumber = document.querySelector("#generateNumber");
const textNumber = document.querySelector("#textNumber");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

function handleInput() {
  const rangeValue = rangeNumber.value;
  generateNumber.innerText = `Generate a number between 0 and ${rangeValue}`;
  textNumber.setAttribute("max", rangeValue);
}

function playCasino(event) {
  event.preventDefault();
  const rangeNum = parseInt(rangeNumber.value);

  const machineNum = Math.floor(Math.random() * (rangeNum + 1));

  gameResult(rangeNum, machineNum);
}

function gameResult(rangeNum, machineNum) {
  const humanNum = textNumber.value;

  if (parseInt(humanNum) === machineNum) {
    result.innerText = `You chose: ${humanNum}, the machine chose: ${machineNum}.
    You Won!`;
  } else if (humanNum === "") {
    result.innerText = "Please write the number!";
  } else {
    result.innerText = `You chose: ${humanNum}, the machine chose: ${machineNum}.
    You Lost!`;
  }
}

rangeNumber.addEventListener("input", handleInput);
button.addEventListener("click", playCasino);
