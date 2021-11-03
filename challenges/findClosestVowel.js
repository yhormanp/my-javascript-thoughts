/*
Find  the closest vowel, if it’s a vowel return the vowel, if it’s a the same distance that 2 vowels, 
just return the earlier vowel
*/

const vowels = 'aeiou'
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function findClosestVowel(character) {


    if (isVowel(character)) {
        return character;
    } else {
        const position = alphabet.indexOf(character);

        // find closest vowels
        if (character > 'u') {
            return 'u';
        } else if (character < 'u' && character > 'o') { // comparing ascii code to find if it lies between two vowels
            console.log('between o and u')
            return getClosestVowel('o', 'u', character);
        } else if (character < 'o' && character > 'i') { // comparing ascii code to find if it lies between two vowels
            console.log('between i and o')
            return getClosestVowel('i', 'o', character);
        } else if (character < 'i' && character > 'e') { // comparing ascii code to find if it lies between two vowels
            console.log('between e and i')
            return getClosestVowel('e', 'i', character);
        } else if (character < 'e' && character > 'a') { // comparing ascii code to find if it lies between two vowels
            console.log('between a and e')
            return getClosestVowel('a', 'e', character);
        } else

            console.log('validation', alphabet[position] > 'e')
        console.log('validation2', alphabet[position].charCodeAt())
        return position;
    }



}

function isVowel(character) {
    return vowels.indexOf(character) >= 0
}
function getClosestVowel(lowerVowel, highestVowel, character) {
    let closestVowel = '';
    const lowestDiff = character.charCodeAt() - lowerVowel.charCodeAt();
    const highestDiff = highestVowel.charCodeAt() - character.charCodeAt();
    if (lowestDiff === highestDiff) {
        closestVowel = lowerVowel;
    } else if (lowestDiff > highestDiff) {
        closestVowel = highestVowel;
    } else if (highestDiff > lowestDiff) {
        closestVowel = lowerVowel;
    }

    return `The closes vowel to the character ${character} is ${closestVowel}`
}
console.log(findClosestVowel("c"));



// another way to do it without knowings the charcodeAt comparison
const newVowels = [
    { character: 'a', position: 0 },
    { character: 'e', position: 4 },
    { character: 'i', position: 8 },
    { character: 'o', position: 14 },
    { character: 'u', position: 20 },
]

function findNewClosestVowel(character) {

    if (isVowel(character)) {
        return character;
    } else {
        return getNewClosestVowel(character)
    }
}

function getNewClosestVowel(character) {
    let closestVowel = '';

    const charPosition = alphabet.indexOf(character);
    const minRange = (charPosition - 5) < 0 ? 0: charPosition - 5;
    const maxRange = (charPosition + 5) > 25 ? 25: charPosition + 5;
    const filteredVowels = newVowels.filter((vowel) => {
        return vowel.position >= minRange  && vowel.position <= maxRange;
    })
    if ( filteredVowels.length > 1){
        console.log('there is more than 1 vowel')
         // compare closest position
         const operation1 = Math.abs((charPosition- filteredVowels[0].position));
         const operation2 =Math.abs((charPosition- filteredVowels[1].position));
 
         if(operation1 === operation2){
            closestVowel = filteredVowels[0].character;
         } else if ( operation1 < operation2){
            closestVowel = filteredVowels[0].character;
         } else if (operation2 < operation1) {
            closestVowel = filteredVowels[1].character;
         }
    }  else {
        closestVowel = filteredVowels[0].character
    }

    return `The closes vowel to the character ${character} is ${closestVowel}`

}

console.log(findNewClosestVowel('l'));