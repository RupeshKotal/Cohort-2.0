/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  // Result variable ko seedha class ke bahar initialize kiya gaya hai
  result = 0;

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    try {
      this.result = eval(expression);
      if (isNaN(this.result) || !isFinite(this.result)) {
        throw new Error("Invalid expression");
      }
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}

// Test cases
const calculator = new Calculator();

calculator.add(5);
console.log("Result after adding 5:", calculator.getResult()); // Should print 5

calculator.subtract(3);
console.log("Result after subtracting 3:", calculator.getResult()); // Should print 2

calculator.multiply(4);
console.log("Result after multiplying by 4:", calculator.getResult()); // Should print 8

calculator.divide(2);
console.log("Result after dividing by 2:", calculator.getResult()); // Should print 4

calculator.clear();
console.log("Result after clearing:", calculator.getResult()); // Should print 0

calculator.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");
console.log("Result after evaluating expression:", calculator.getResult()); // Should print 32


module.exports = Calculator;
