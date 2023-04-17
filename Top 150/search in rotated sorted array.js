var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((low + high) / 2);

  while (low <= high) {
    if (target === nums[mid]) {
      return mid;
    }
    if (target === nums[low]) {
      return low;
    }
    if (target === nums[high]) {
      return high;
    }
    if (nums[low] <= nums[mid]) {
      if (target >= nums[low] && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    mid = Math.floor((low + high) / 2);
  }

  return -1;
};

var nums = [4, 5, 6, 7, 0, 1, 2];
var target = 2;

console.log(search(nums, target));
