/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

inputs
fearNotLetter("abce") should return the string d.

fearNotLetter("abcdefghjklmno") should return the string i.

fearNotLetter("stvwx") should return the string u.

fearNotLetter("bcdf") should return the string e.

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined

*/

function fearNotLetter(str) {
    let initialCharCode = str.charCodeAt(0);
    for(let i=0; i < str.length ; i++){
      if(str.charCodeAt(i) !== initialCharCode){
        return String.fromCharCode(initialCharCode);
      } else {
        initialCharCode ++;
      }
    }
    return undefined;
  }
  
  console.log( fearNotLetter("abce") );

  // OPTION 2

  function fearNotLetter2(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;
  
   str.split("").forEach(letter => {
       if(letter.charCodeAt(0) === currCharCode){
           currCharCode ++;
       } else {
           missing = String.fromCharCode(currCharCode);
       }
   })
  
    return missing;
  }
  
  // test here
  console.log(fearNotLetter2("abce") );