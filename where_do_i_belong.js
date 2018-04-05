function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort((a, b) => a - b);
  if (arr[0] > num) {
    return 0;
  }
  if (arr[arr.length - 1] < num) {
    return arr.length;
  }
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      return i;
    } else if (num > arr[i] && num < arr[i + 1]) {
      return i + 1;
    }
  }
}

getIndexToIns([1, 2, 3, 4, 5, 6, 7], 8);
