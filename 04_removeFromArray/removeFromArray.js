const removeFromArray = function (arr, ...args) {
  let argarr = [...args];
  for (let i = 0; i < argarr.length; i++) {
    if (arr.indexOf(argarr[i]) > -1) {
      arr.splice(arr.indexOf(argarr[i]), 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
