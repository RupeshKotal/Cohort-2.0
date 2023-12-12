/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let clearString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
  let reverseString = clearString.split('').reverse().join('')
  return clearString === reverseString
}




module.exports = isPalindrome;
