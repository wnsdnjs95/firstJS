// 한줄 주석처리
/*
주석처리
*/
var a = 221;
var b = a - 5;
a = 4;

/* String
const what = "Junwon";

Boolean
const wat = true;

Number
const watt = 666;

Float
const wat = 55.1;
*/

//Array
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
const sat = "Sat";
const sun = "Sun";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//Object
const junwonInfo = {
  name: "Junwon",
  age: 26,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Parasite", "LOTR", "Oldboy"],
  favFood: [
    {
      name: "Ramen",
      fatty: false,
    },
    {
      name: "Cheeseburger",
      fatty: true,
    },
  ],
};

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (hasClass) {
  //   title.classList.remove(CLICKED_CLASS);
  // } else {
  //   title.classList.add(CLICKED_CLASS);
  // } 위와 같은 것
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
// handleResize는 내가 원할 때 호출하는 코드
// handleResize()는 바로 함수를 호출하는 코드

// if (age >= 18 && age <= 21) {
//   console.log("you can drink but you should not");
// } else if (age > 21) {
//   console.log("you can drink");
// } else {
//   console.log("you cant drink");
// }
// !== 같지 않다면
