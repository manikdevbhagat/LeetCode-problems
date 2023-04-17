var maxArea = function (height) {
  var first = 0,
    second = height.length - 1,
    max = 0;
  var h1, h2, volume;

  while (first < second) {
    h1 = height[first];
    h2 = height[second];

    if (h1 < h2) {
      volume = (second - first) * h1;
      first++;
    } else {
      volume = (second - first) * h2;
      second--;
    }

    if (volume > max) {
      max = volume;
    }
  }

  return max;
};

height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
