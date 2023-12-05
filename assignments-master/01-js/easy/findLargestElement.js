/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
// let num=[3,2,4,5,7,8]
function findLargestElement(numbers) {
    let value = numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>value){
            value = numbers[i];
        }
    }
    return value;
}

// let result = findLargestElement(num)
// console.log(result);
module.exports = findLargestElement;