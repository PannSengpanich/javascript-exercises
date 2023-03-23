const findTheOldest = function (a) {
  let present = 2023;
  let agearr = a.map((ele) => {
    if (!ele.hasOwnProperty("yearOfDeath")) {
      return present - ele["yearOfBirth"];
    } else return ele["yearOfDeath"] - ele["yearOfBirth"];
  });
  let maxindex = agearr.indexOf(Math.max(...agearr));
  return a[maxindex];
};

// Do not edit below this line
module.exports = findTheOldest;
