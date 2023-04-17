var longestCommonPrefix = function (strs) {
  var min = Number.MAX_VALUE;
  var prefix = "";
  var bool = true;
  var temp = "";
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < min) {
      min = strs[i].length;
    }
  }
  for (let i = 0; i < min; i++) {
    for (let j = 0; j < strs.length; j++) {
      temp = strs[0][i];
      if (strs[j][i] !== temp) {
        bool = false;
        break;
      }
    }
    if (bool === true) {
      prefix = prefix + temp;
    } else {
      break;
    }
  }
  return prefix;
};

var strs = ["manik","manik","manik"];

console.log(longestCommonPrefix(strs));
