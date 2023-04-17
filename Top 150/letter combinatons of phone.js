var letterCombinations = function (digits) {
  var map = new Map();
  map.set("2", ["a", "b", "c"]);
  map.set("3", ["d", "e", "f"]);
  map.set("4", ["g", "h", "i"]);
  map.set("5", ["j", "k", "l"]);
  map.set("6", ["m", "n", "o"]);
  map.set("7", ["p", "q", "r", "s"]);
  map.set("8", ["t", "u", "v"]);
  map.set("9", ["w", "x", "y", "z"]);

  let first = "";
  let second = "";
  for (let i = 0; i < digits.length - 1; i++) {
    first = first + digits[i];
    second = digits[i + 1];
    multiply(first, second);
  }

  function multiply(s1, s2) {
    var arr1 = map.get(s1);
    var arr2 = map.get(s2);
    var arr3 = new Array();

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        arr3.push(arr1[i] + arr2[j]);
      }
    }
    map.set(s1 + s2, arr3);
  }

  return map.get(digits) === undefined ? [] : map.get(digits);
};

var digits = "777";
console.log(letterCombinations(digits));
