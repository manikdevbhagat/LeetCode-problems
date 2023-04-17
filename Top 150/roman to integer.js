var romanToInt = function (s) {
  var map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  let integer = 0;
  let int1;
  let int2;
  let i=0;
  while (i < s.length) {
    int1 = map.get(s[i]);
    int2 = map.get(s[i + 1])===undefined?0:map.get(s[i + 1]);

    if(int1>=int2){
      integer=integer+int1;
      i++;
    }
    if(int1<int2){
      integer=integer+int2-int1;
      i=i+2;
    }
  }

  return integer;
};

var roman = 'XXIX';

console.log(romanToInt(roman));
