function diffArray(arr1, arr2) {
  var newArr = [];
  function compare(first, second) {
    for (var i = 0; i < first.length; i++) {
      if (!second.includes(first[i])) {
        newArr.push(first[i]);
      }
    }
  }
  compare(arr1, arr2);
  compare(arr2, arr1);
  return newArr;
}
