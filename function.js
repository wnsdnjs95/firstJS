// function sayHello(name, age) {
//   return `Hello ${name} you are ${age} years old`;
// }

// console.log(greetJunwon);
// const greetJunwon = sayHello("Junwon", 26);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multify: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const calculatorResult = {
  plus: calculator.plus(2, 2),
  minus: calculator.minus(2, 2),
  multify: calculator.multify(2, 2),
  divide: calculator.divide(2, 2),
  power: calculator.power(3, 3),
};
console.log(calculatorResult);
