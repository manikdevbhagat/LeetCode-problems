var longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s[0];
  }
  let max = 0;
  let palindrome = "";
  let longestPalindrome = "";
  for (let i = 0; i < s.length - 1; i++) {
    let left = i;
    let right = i + 1;
    palindrome = "";
    while (s[left] === s[right] && s[left] !== undefined) {
      palindrome = s[left] + palindrome + s[right];
      if (right - left + 1 > max) {
        max = right - left + 1;
        longestPalindrome = palindrome;
      }
      left--;
      right++;
    }

    left = i;
    right = i + 2;
    palindrome = s[i + 1];
    while (s[left] === s[right] && s[right] !== undefined) {
      palindrome = s[left] + palindrome + s[right];
      if (right - left + 1 > max) {
        max = right - left + 1;
        longestPalindrome = palindrome;
      }
      left--;
      right++;
    }
  }

  // return longestPalindrome;
  return longestPalindrome === "" ? s[0] : longestPalindrome;
};

var s = "babab";
// console.log(s[1]);
console.log(longestPalindrome(s));
