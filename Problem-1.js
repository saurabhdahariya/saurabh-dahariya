// Problem-1: Calculator with basic operations

// 🔧 User can change these values
let a = 10;
let b = 5;
let operation = 'Addition'; // Change to Addition, Subtraction, Multiplication, Division

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  doOperation(typeOfOperation) {
    if (typeOfOperation === 'Addition') {
      return this.a + this.b;
    } else if (typeOfOperation === 'Subtraction') {
      return this.a - this.b;
    } else if (typeOfOperation === 'Multiplication') {
      return this.a * this.b;
    } else if (typeOfOperation === 'Division') {
      if (this.b === 0) {
        return 'Error: cannot divide by zero';
      }
      return this.a / this.b;
    } else {
      return 'Error: unknown operation';
    }
  }
}

// Print the output
const calculator = new Calculator(a, b);
console.log(`Result of ${operation}:`, calculator.doOperation(operation));
