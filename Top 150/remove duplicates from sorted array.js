var removeDuplicates = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  let curr = nums[0];
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== curr) {
      curr = nums[i];
      index++;
      nums[index] = curr;
    }
  }
  return index + 1;
};

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates([1, 2]));
