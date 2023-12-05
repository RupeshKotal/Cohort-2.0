/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
let str = 'rupesh'
function countVowels(str) {
    // Your code here
    let string = str.toLowerCase();

    const vowels =['a','e','i','o','u'];

    let vowelcount = 0;

    for (let char of string){
     if (vowels.includes(char)){
      vowelcount++
     }
    }
    return vowelcount


}

let value = countVowels(str);
console.log(value);


module.exports = countVowels;