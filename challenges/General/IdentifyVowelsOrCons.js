/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

inputs

translatePigLatin("california") should return the string aliforniacay.

translatePigLatin("paragraphs") should return the string aragraphspay.

translatePigLatin("glove") should return the string oveglay.

translatePigLatin("algorithm") should return the string algorithmway.

translatePigLatin("eight") should return the string eightway.

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.

Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.

*/


//OPTION 1
function translatePigLatin(str) {
    const regex = /^[^aeiou]+/;
    const vowelEnd= 'way';
    const consonantEnd = 'ay';
    const consonantsFound = str.match(regex);
    console.log(consonantsFound)
    return consonantsFound !== null ?
      str.replace(regex, "")
      .concat(consonantsFound)
      .concat(consonantEnd)
    : str.concat(vowelEnd)
  }
  
  console.log(translatePigLatin("glove"));

  // OPTION2