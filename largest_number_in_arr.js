/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  // You can do this!
  let largest = [];
  arr.forEach(element => {
    let max = 0;
    if(typeof element === 'object') {
      element.forEach(el => {
        if(el > max) {
          max = el;
        }
      })
    }
    largest.push(max)
  })
  return largest
}