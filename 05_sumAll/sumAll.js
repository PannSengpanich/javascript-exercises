const sumAll = function (first, last) {
  let res = 0;
  if (
    [first, last] <= [0, 0] ||
    !Number.isInteger(first) ||
    !Number.isInteger(last)
  ) {
    return "ERROR";
  }
  if (first > last) {
    let temp = first;
    first = last;
    last = temp;
  }
  for (first; first <= last; first++) {
    res += first;
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
