/*

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

input examples
palindrome("eye") should return a boolean.

palindrome("eye") should return true.

palindrome("_eye") should return true.

palindrome("race car") should return true.

palindrome("not a palindrome") should return false.

palindrome("A man, a plan, a canal. Panama") should return true.

palindrome("never odd or even") should return true.

palindrome("nope") should return false.
*/

function palindrome(str) {
  str = str
  .replaceAll(" ", "")
  .replaceAll(",", "")
  .replaceAll(".", "")
  .replaceAll("-", "")
  .replaceAll("_", "")
  .replaceAll("/", "")
  .replaceAll("\\", "")
  .replaceAll("(", "")
  .replaceAll("\)", "")
    .toLowerCase();
  const middleIndex = (str.length - 1) / 2;
  const final = str.length -1;

  for(let i = 0 ; i <= middleIndex; i++){
      if (str[i] !== str[final - i]){
          return false
      }
  }
  
  return true;
}
console.log( palindrome("eye" ) ); //should return true.
console.log( palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /-\ :) 0-0"))
