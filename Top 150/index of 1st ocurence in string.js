var strStr = function (haystack, needle) {
  let i = 0,
    j = 0,
    last = 0;

  while (i < haystack.length) {
    console.log(i, j, last);
    if (needle[j] === haystack[i]) {
      if (j === 0) {
        last = i;
      }
      i++;
      j++;
    } else {
      if (j === 0) {
        last = i;
        i++;
      } else {
        i = last+1;
      }
      j = 0;
    }

    if (j > needle.length - 1) {
      return i - j;
    }
  }

  return -1;
};

var haystack = "mississippi",
  needle = "sipp";

console.log(strStr(haystack, needle));
