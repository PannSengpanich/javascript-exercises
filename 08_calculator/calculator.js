const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  let res = 0;
  for (let num of a) {
    res += num;
  }
  return res;
};

const multiply = function (a) {
  let res = 1;
  for (let num of a) {
    res *= num;
  }
  return res;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  if (a == 0) {
    return 1;
  } else {
    let res = 1;
    for (let i = a; i > 0; i--) {
      res *= i;
    }
    return res;
  }
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
