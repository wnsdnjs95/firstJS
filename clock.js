const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${
    seconds < 10 ? `0${seconds}` : seconds
    // ? 는 if 같은 것 : else 같은 것, 위와 같은 식을 삼항연산자라고 한다
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
