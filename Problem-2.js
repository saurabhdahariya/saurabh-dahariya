// Problem-2: Print the first a odd numbers


let a = 4;

function printOddNumbers(a) {
  let result = [];
  let num = 1;

  for (let i = 0; i < a; i++) {
    result.push(num);
    num += 2;
  }

  return result;
}

// Print the output
console.log(`Output for a = ${a}:`, printOddNumbers(a));
