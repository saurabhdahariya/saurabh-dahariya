// Problem-3: Print series of odd numbers based on the value of a


let a = 7; 

function printOddSeries(a) {
  let result = [];
  let num = 1;
  let length;

  if (a % 2 === 0) {
    length = a - 1; 
  } else {
    length = a;     
  }

  for (let i = 0; i < length; i++) {
    result.push(num);
    num += 2;
  }

  return result;
}

// Print the output
console.log(`Output for a = ${a}:`, printOddSeries(a));
