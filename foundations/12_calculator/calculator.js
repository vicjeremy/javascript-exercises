const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
    return array.reduce((a, b) => {return a + b}, 0);
};

const multiply = function (array) {
  return array.reduce((a, b) => a * b);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  var rval = 1;
  for (var i = 2; i <= num; i++) rval *= i;
  return rval;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
