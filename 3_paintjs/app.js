const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsPaintMode");
const save = document.getElementById("jsSave");

// 자주 사용하는 단위는 이렇게 대문자 상수로 사용하면 좋다.

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

// 캔버스의 가로, 세로 길이를 설정해줘야 사용이 가능하다. CSS에서 설정하는 것과는 다른데, CSS에서는 겉으로 보이는 사이즈를 만들어주는 것이고
// JS에서는 실제 작동할 캔버스의 범위를 지정하는 것과 같다.

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

// painting과 filling 을 false 로 지정해놓은 것은 스위치를 사용하는 것과 비슷한 방식을 쓰려는 것이다.
// if 문을 활용해 false이면 이렇게, true이면 저렇게 작동하도록 하는 것이다.

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

// ctx.beginPath() : 새로운 경로를 만든다.
// ctx.moveTo(x, y) : 펜을 x와 y의 지정된 좌표로 옮긴다. 선 그리기 시작 좌표 함수.
// ctx.lineTo(x, y) : 현재 위치에서 x, y로 지정된 위치까지 선을 그린다. 선 그리기 종료 좌표 함수
// ctx.stroke() : 윤곽선을 이용해 도형을 그린다. 선의 종류를 지정해주는 함수.

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

// 기본 두께는 2.5로 설정해놨지만 Range를 바꿀 때마다 Range 값으로 lineWidth가 바뀌도록 한다.

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

// 기본 값은 Fill 이지만 클릭하면 Paint로 글씨를 바꾸고, 또 클릭하면 다시 Fill로 바꾼다.

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

// 우클릭 막기

function handleCM(event) {
  event.preventDefault();
  alert("우클릭 안됨!");
}

function handleSave(event) {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJs[EXPORT]😁";
  link.click();
}

// mousedown : 요소 위에서 마우스 왼쪽 버튼을 누를 때
// mouseup : 마우스 버튼을 누르고 있다가 뗄 때
// mouseover : 마우스 커서가 요소 바깥에 있다가 요소 안으로 움직일 때
// mouseout : 마우스 커서가 요소 안에 있다가 요소 밖으로 움직일 때
// contextmenu : 마우스 오른쪽 버튼을 눌렀을 때

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

// colors 클래스 내용으로 이루어진 array의 요소들을 반복해서 작업을 수행하는데,
// 그 내용은 클릭하면 handleColorClick 이라는 함수를 실행하는 것이다.

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (save) {
  save.addEventListener("click", handleSave);
}
