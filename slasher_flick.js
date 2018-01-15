/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {
  if(arr.length < howMany)
    return [];
  else {
    let headless = arr.slice();
    for(let i = 0; i < howMany; i++) {
      headless.shift();
    }
    return headless;
  }
}

slasher([1, 2, 3], 2);