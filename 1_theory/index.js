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
const title = document.querySelector("#title");

function handleResize() {
  console.log("I have been resized!");
}

function handleClick() {
  title.style.color = "red";
}

window.addEventListener("resize", handleResize);

title.addEventListener("click", handleClick);

/*
const title = document.querySelector("#title");

const BASE_COLOR="rgb(52, 73, 94)";

function handleClick() {
    console.log(title.style.color);
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();
*/
