/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  
  var longest = 0;
  var stringArray = str.split(' ');
  
  for(var i = 0; i < stringArray.length; i++) {
    if(stringArray[i].length >= longest) {
      longest = stringArray[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");