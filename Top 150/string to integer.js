var myAtoi = function (s) {
  var nums = "0123456789";
  var symbols = "+ -";
  var sign = 1;
  var doubleSign;
  var numStr = "";
  var arr = [...s];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (numStr === "" && !nums.includes(arr[i]) && !symbols.includes(arr[i])) {
      console.log("called");
      break;
    }
    if (arr[i] === "-") {
      sign = -1;
      if (doubleSign === 1) {
        doubleSign = 0;
      } else {
        doubleSign = -1;
      }
    }
    if (arr[i] === "+") {
      if (doubleSign === -1) {
        doubleSign = 0;
      } else {
        doubleSign = 1;
      }
    }
    if (nums.includes(arr[i])) {
      numStr = numStr + arr[i];
      console.log(numStr);
      if (!nums.includes(arr[i + 1])) {
        break;
      }
    }
  }
  let strToNum = doubleSign !== 0 ? Number(numStr) * sign : 0;

  if (strToNum > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else if (strToNum < -1 * 2 ** 31) {
    return -1 * 2 ** 31;
  } else {
    return strToNum;
  }
};

var s = "+-3.14159";
console.log(myAtoi(s));
