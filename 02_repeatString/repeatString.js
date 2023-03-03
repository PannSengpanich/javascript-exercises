const repeatString = function (string, number) {
  let res = "";
  if (number == -1) {
    res = "ERROR";
  }
  if (number == 0) {
    res = "";
  }
  for (let i = 0; i < number; i++) {
    res = res.concat(string);
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
