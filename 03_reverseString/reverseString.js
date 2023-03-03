const reverseString = function (string) {
  let res = [];
  if (string == "") {
    return "";
  }
  res = string.split("").reverse().join("");
  return res;
};

// Do not edit below this line
module.exports = reverseString;
