/*
return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
*/

// function titleCase(str) {
//     const splitted =str.toLowerCase().split(' ');
//     const capCase  = splitted.map((word) => {
//       return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
//     })

//     return capCase.join(' ')
//   }

//   titleCase("I'm a little tea pot");


// another way to do it


  String.prototype.convertToCap = function (){
    //   return this.replace(this.charAt(0), this.charAt(0).toUpperCase());
      return this.charAt(0).toUpperCase() + this.slice(1);
  }

function titleCase2(str) {
    const listOfStr = str.toLowerCase().split(' ').map(word => word.convertToCap());
    return listOfStr.join(' ');
}

console.log(titleCase2("I'm a little tea pot"));