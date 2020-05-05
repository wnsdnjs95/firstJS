// 한줄 주석처리
/*
주석처리
*/
var a = 221;
var b = a - 5;
a = 4;

console.log(b, a);

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

console.log(daysOfWeek[3]);

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

console.log(junwonInfo.favFood[1].fatty);

const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "";
}

title.addEventListener("click", handleClick);
// handleResize는 내가 원할 때 호출하는 코드
// handleResize()는 바로 함수를 호출하는 코드
