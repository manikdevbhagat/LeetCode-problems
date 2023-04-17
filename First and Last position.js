var searchRange = function (nums, target) {
  let first = -1,
    last = -1;
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (nums[mid] < target) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else if (nums[mid] > target) {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    } else {
      last = mid;
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    }
  }
  start = 0;
  end = nums.length - 1;
  mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (nums[mid] < target) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else if (nums[mid] > target) {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    } else {
      first = mid;
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    }
  }

  return [first, last];
};

const nums = [5,7,7,8,8,10];

console.log(searchRange(nums, 8));
