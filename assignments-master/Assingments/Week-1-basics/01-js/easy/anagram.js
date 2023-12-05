/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
let word1= str1.length
let word2= str2.length

if (word1!=word2){
  return false
}

let value1 = str1.toLowerCase().split('').sort().join('')
let value2 = str2.toLowerCase().split('').sort().join('')


if(value1==value2){
  return true
}
else{
  return false
}

}


module.exports = isAnagram;
