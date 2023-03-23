const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  if (num instanceof String) {
    num = parseInt(num);
  }
  let a = 0;
  let res = 1;
  for (let i = 0; i < num - 1; i++) {
    let temp = res;
    res += a;
    a = temp;
  }
  return res;
};

// Do not edit below this line
module.exports = fibonacci;
