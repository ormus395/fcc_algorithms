/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether(first) {
  if (!isNumber(first)) {
    return undefined
  }
  // check for valid numbers
  // check arguments length
  if (arguments.length > 1) {
    for (let i = 0; i < arguments.length; i++) {
      if (!isNumber(arguments[i])) {
        return undefined
      }
    }
    return first + arguments[1];
  } else {
    return function addSecond(second) {
      if (!isNumber(second))
        return undefined;
      return first + second;
    }
  }
}

function isNumber(a) {
  return typeof a === 'number'
}


// console.log(addTogether(2, 3));
let total = addTogether(2)

console.log(total(2))