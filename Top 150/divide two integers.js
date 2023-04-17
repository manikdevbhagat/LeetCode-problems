var divide = function (dividend, divisor) {
  let truncated = Math.abs(dividend);
  let sub = Math.abs(divisor);
  let quotient = 0;
  let negative = false;
  if (sub === 0) {
    return Infinity;
  }
  while (truncated >= sub) {
    truncated = truncated - sub;
    quotient++;
  }

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    negative = true;
  }
  if (quotient > 2 ** 31 - 1) {
    if (negative) {
      quotient = 2 ** 31;
    } else {
      quotient = 2 ** 31 - 1;
    }
  }
  if (negative) {
    return 0 - quotient;
  } else {
    return quotient;
  }
};

console.log(divide(214748364, 3));
