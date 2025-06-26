// Problem-4: Count multiples of numbers 1-9 from a given list


let inputList = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];

function countMultiples(arr) {
  let counts = {};

  for (let i = 1; i <= 9; i++) {
    counts[i] = arr.filter(num => num % i === 0).length;
  }

  return counts;
}

// Print the output
console.log(`Input list: [${inputList}]`);
console.log('Output:', countMultiples(inputList));
