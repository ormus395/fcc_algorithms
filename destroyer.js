/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  // Remove all the values
  let args = Array.from(arguments);
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(el => el);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
