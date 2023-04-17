var longestPalindrome = function (words) {
  let palindrome;
  let bool = false;

  while (words.length > 0) {
    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < words.length; j++) {
        if (words[i][0] === words[j][1] && words[i][1] === words[j][0]) {
          if (palindrome === undefined) {
            palindrome = words[i] + words[j];
          } else {
            palindrome = words[i] + palindrome + words[j];
          }
          bool = true;
          words.splice(i, 1);
          words.splice(j - 1, 1);
          break;
        }
      }
      if (bool === true) {
        break;
      }
    }

    if (bool === false) {
      for (let i = 0; i < words.length; i++) {
        if (words[i][0] === words[i][1]) {
          if (palindrome === undefined) {
            palindrome = words[i];
          } else {
            let l = palindrome.length / 2;
            palindrome =
              palindrome.slice(0, l) + words[i] + palindrome.slice(l);
          }

          break;
        }
      }
      words = [];
    }
    bool = false;
  }

  if (palindrome === undefined) {
    return 0;
  } else {
    return [palindrome.length, palindrome];
  }
};

words = ["aw","lc","cl","gg"];

console.log(longestPalindrome(words));
