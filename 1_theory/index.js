console.log("This is just a test page!");

/* string
const what= "Nicolas";
console.log(what);
*/
/*
Boolean
const wat = false;
console.log(wat);
*/
/*
Number
const wat=666;
console.log(wat);
*/
/*Float
const wat= 55.1;
console.log(wat);
*/

/*
Array - 리스트같이 저장하는 방식 

const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

console.log(daysOfWeek);
*/

/*
Object - 리스트지만 어떤 항목의 값인지를 확인하고자 할 때 사용 / 개인정보 등

const seopInfo = {
    name:"Seop",
    age:31,
    gender:"Male",
    isHandsome:true
}



console.log(seopInfo.isHandsome);



const seopInfo = {
    name: "SEOP",
    age: 31,
    gender: "Male",
    isHandsome: true,
    favMovies: ["신과 함께", "매드맥스", "Oldboy"],
    favFood: [
        {
            name: "Hamburger",
            fatty: true
        },
        {
            name: "Chicken",
            fatty: true
        }
    ]
}

console.log(seopInfo.favFood[0].name)

*/

/*
function sayHi(name, location) {
    console.log('Hello', name, '!', ' I think you live in ', location, ', right?')
};

sayHi("SEOP", "seoul");
*/

/*
function sayHello(name, age) {
    return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nico", 14);

console.log(greetNicolas);
*/

/*
const calculator = {
    plus : function(a, b){
        return a+b ;
    }
}

const plus = calculator.plus(5, 5);

console.log(plus)
*/

/*
const calculator = {
    minus : function(a, b){
        return a-b;
    }
}

const minus = calculator.minus(10, 5);

console.log(minus)
*/

/*

const calculator = {
    plus:function (a,b) {
        return a+b;
    },
    minus:function (a,b) {
        return a-b;
    },
    multiply:function (a,b) {
        return a*b;
    },
    divide:function (a,b) {
        return a/b;
    },
    remainder:function (a,b) {
        return a%b;
    },
    power:function (a,b) {
        return a**b;
    }
}

const plus = calculator.plus (3, 456)
console.log(plus)

const minus = calculator.minus (450, 30)
console.log(minus)

const multiply = calculator.multiply (3, 9)
console.log(multiply)

const divide = calculator.divide (8, 4)
console.log(divide)

const remainder = calculator.remainder (10, 2)
console.log(remainder)

const power = calculator.power (2,3)
console.log(power)

*/

/*
const title = document.getElementsById("#title");

title.innerHTML = "Hi! From JS";
title.style.color = "teal";
document.title = "I own you now";

function handleClick() {
    title.style.color = "red";
}


title.addEventListener("click", handleClick);

console.dir(document);
*/

/*
const title = document.querySelector("#title");

function handleResize() {
  console.log("I have been resized!");
}

function handleClick() {
  title.style.color = "red";
}

window.addEventListener("resize", handleResize);

title.addEventListener("click", handleClick);

*/

/*
const title = document.querySelector("#title");
*/

// == 연산자는 두 변수의 '값' 만을 비교하고, === 연산자는 값과 자료형 모두 비교한다!(좀 더 엄격하달까?)

// and = &&    / or = ||

/*
if (10 === 5) {
  console.log("Hi!");
} else if ("10" === "10") {
  console.log("lalalalal");
} else {
  console.log("Ho!");
}
*/

/*
if (20 > 5 && "nicolas" === "nicolas") {
  console.log("True");
} else {
  console.log("False!");
}
*/

/*
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}

init();

function handleOffline() {
  console.log("Bye Bye");
}

function handleOnline() {
  console.log("Welcome Back !!");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

/*
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();

*/
