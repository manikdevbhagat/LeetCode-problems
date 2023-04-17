var reverse = function (x) {
  var negative = false;
  if (x < 0) {
    negative = true;
    x = x * -1;
  }
  var str = x.toString();
  var arr = [...str];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  str = arr.join("").toString();
  x = Number(str);
  if (negative) {
    x = x * -1;
  }
  let limit = Math.pow(2, 31);
  if (x > limit - 1 || x < limit * -1) {
    return 0;
  } else {
    return x;
  }
};

console.log(reverse(10));
