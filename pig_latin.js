/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/
function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(str.charAt(0))) {
    return str + "way";
  } else if (!vowels.includes(str.charAt(1))) {
    return str.substr(2) + str.charAt(0) + str.charAt(1) + "ay";
  } else {
    return str.substr(1) + str.charAt(0) + "ay";
  }
}

console.log(translatePigLatin("glove"));
