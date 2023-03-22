const palindromes = function (str) {
  let newstr = str
    .toLowerCase()
    .match(/[A-Za-z0-9]/g)
    .toString();
  let twinstr = [];

  newstr = newstr.split("");
  for (let i = 0; i < newstr.length; i++) {
    twinstr.push(newstr[newstr.length - 1 - i]);
  }
  newstr = newstr.join("");
  twinstr = twinstr.join("");
  return newstr == twinstr;
};
// Do not edit below this line
module.exports = palindromes;
