var firstMissingPositive = function (nums) {
  let length = nums.length;
  let i = 1;

  while (i <= length) {
    if (nums[i - 1] !== i) {
      if (nums[i - 1] < 1 || nums[i - 1] > length) {
        i++;
      } else if (nums[i - 1] === nums[nums[i - 1] - 1]) {
        i++;
      } else {
        let temp = nums[nums[i - 1] - 1];
        nums[nums[i - 1] - 1] = nums[i - 1];
        nums[i - 1] = temp;
      }
    } else {
      i++;
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] !== i) {
      return i;
    }
  }
  return length + 1;
};

var nums = [0, 1, 2];
console.log(firstMissingPositive(nums));
