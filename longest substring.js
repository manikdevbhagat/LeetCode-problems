var lengthOfLongestSubstring = function (s) {
  var arr = [...s];
  var strLength = 1,
    maxLength = 1;
  if (arr.length <= 1) {
    return arr.length;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].includes(arr[i + 1])) {
      arr[i] = arr[i].substr(arr[i].indexOf(arr[i + 1]) + 1);
    }
    arr[i + 1] = arr[i] + arr[i + 1];
    // console.log(arr);
    strLength = arr[i + 1].length;
    if (strLength > maxLength) {
      maxLength = strLength;
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("aaacabdfg"));
