const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function addNumbers(sum, numsLeft, completionCallback ) {
  if (numsLeft > 0) {
    reader.question("Enter a number:", function (numString1) {
      const num1 = parseInt(numString1);
      sum += num1;
      completionCallback(sum);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
      
    });
  } else if (numsLeft === 0) {
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));