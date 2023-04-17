var isMatch = function (s, p) {

  if (!p.includes("*") && !p.includes(".")) {
    return p === s;
  }
  if (p.includes(".*")) {
    return true;
  }
  if (p.includes("*")) {
    let prev = p[p.indexOf("*") - 1];
    let letter='';
    for (let i = 0; i < s.length; i++) {
      letter = letter + prev;
    }
    if (letter === s) {
      return true;
    }
  }
  return false;
};

var s = "ab";
var p = ".*";

console.log(isMatch(s, p));
