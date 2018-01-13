/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  
  var newString = str.toLowerCase().split(' ');
  var stringArr = [];
  
  for(var i = 0; i < newString.length; i++) {
    stringArr.push(newString[i].capitalize());
  
  }
  return stringArr.join(' ');
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

titleCase("I'm a little tea pot");