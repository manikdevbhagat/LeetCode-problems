var isMatch = function (s, p) {
  if (!p.includes("*") && !p.includes("?")) {
    return s === p;
  }
  let i = 0;
  let j = 0;
  while (i < s.length) {
    if (p[j] !== "*" && p[j] !== "?") {
      if (p[j] !== s[i]) {
        return false;
      } else {
        i++;
        j++;
      }
    }
    
  }
};
