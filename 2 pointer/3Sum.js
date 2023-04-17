var threeSum = function (nums) {
  var sortedNums = nums.sort((a, b) => {
    return a - b;
  });
  var output = [],
    triplet = [];
  var first = 0;
  var sum;

  for (first; first < nums.length - 2; first++) {
    var second = first + 1;
    var third = nums.length - 1;
    if (sortedNums[first] > 0) {
      break;
    }
    if (first > 0 && sortedNums[first] === sortedNums[first - 1]) {
      continue;
    }
    while (second < third) {
      sum = sortedNums[first] + sortedNums[second] + sortedNums[third];
      if (sum < 0) {
        second++;
      } else if (sum > 0) {
        third--;
      } else {
        triplet = [sortedNums[first], sortedNums[second], sortedNums[third]];
        output.push(triplet);
        while (
          second < third &&
          sortedNums[second] === sortedNums[second + 1]
        ) {
          second++;
        }
        while (second < third && sortedNums[third] === sortedNums[third - 1]) {
          third--;
        }
        second++;
        third--;
      }
    }
  }

  return output;
};


nums = [0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(threeSum(nums));
