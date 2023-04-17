var maxPoints = function (points) {
  let slope;
  let n = points.length;
  let x1, y1, x2, y2;
  let map = new Map();

  if (points.length === 1) {
    return 1;
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      x1 = points[i][0];
      y1 = points[i][1];
      x2 = points[j][0];
      y2 = points[j][1];
      slope = (y2 - y1) / (x2 - x1);

      if (slope === -Infinity) {
        slope = Math.abs(slope);
      }

      if (map.has(`${slope}${i}`)) {
        map.set(`${slope}${i}`, map.get(`${slope}${i}`) + 1);
      } else {
        map.set(`${slope}${i}`, 2);
      }
    }
  }
  return Math.max(...map.values());
};

points = [
  [0, 1],
  [0, 0],
  [0, 4],
  [0, -2],
  [0, -1],
  [0, 3],
  [0, -4],
];

console.log(maxPoints(points));
