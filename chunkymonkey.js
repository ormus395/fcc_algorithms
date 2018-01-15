/*
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var chunkyMonkey = [];
  var start = 0;
  var end = size;
  if(arr.length % 2 !== 0) {
    for(let i = 1; i <= arr.length; i+=size) {
      chunkyMonkey.push(arr.slice(start, end));
      start+=size;
      end+=size;
    }
    return chunkyMonkey;
  } else {
    for(let i = 1; i < arr.length; i+=size) {
      chunkyMonkey.push(arr.slice(start, end));
      start+=size;
      end+=size;
    }
    return chunkyMonkey;
  }
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);