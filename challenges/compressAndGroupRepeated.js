/*

•Create a JS function that receives a string of length N and compress it by grouping repeated characters.

•

•Entry: “aaaaabbbbcccaaaaaaa”

•Returns: “a5b4c3a7”
*/


function groupRepeated (text) {
    let textResult = "";
    let tempText = "";


    for(let i = 0; i <= text.length; i++){
        if(i !== 0 && text.charAt(i) !== text.charAt(i - 1) || i === text.length){
            //it means the letter just changed
            textResult += `${tempText.charAt(0)}${tempText.length}`;
            tempText = text.charAt(i);

        } else {
            tempText += text.charAt(i);
        }
    }



    return textResult
}



console.log( groupRepeated("aaaaabbbbcccaaaaaaa") ); // “a5b4c3a7”


/*

•Create a JS function that receives a string of length N and returns the quantity of each letter in the string.

•

•Entry: “aaaaabbbbcccaaaaaaa”

•Returns: “{a: 12, b: 4, c: 3}”
*/

function groupAndCountRepeated(text) {
    return text.split('').reduce((acum, current)=> {
        if( acum[current]){
            acum[current] += 1;
        } else {
            acum[current] = 1;
        }
        return acum;
    },{})
}



console.log( groupAndCountRepeated("aaaaabbbbcccaaaaaaa") ); // { a: 12, b: 4, c: 3 }


/*
Create a JS function that receives a string of length N and compress it by grouping repeated characters.
expected : "how do you do you homework , when , how and who helps you with it"


*/

function countingWords (text){
    let maxCoincidences = 0;
    let repeatedWord = "";

    const result = text.split(' ').reduce ( (acm, current) => {
        if ( acm[current]){
            acm[current] += 1;
        } else {
            acm[current] = 1;
        }

        if(acm[current] > maxCoincidences){
            maxCoincidences = acm[current];
            repeatedWord = current;
        }
        return acm;
    }, {})

    console.log('resultado, palabra mas repetida', {maxCoincidences, repeatedWord})
    return result;

}

console.log(countingWords ('how do you do you homework , when , how and who helps you with it'))

// function countingWord2(text){

//     maxCoincidences = 0;
//     word = "";
//     text.split(" ").forEach(value => {
//         console.log('esta aparece', value, text.split(value).length, text.split(value));
//     })

// }

// console.log(countingWord2 ('how do you do you homework , when , how and who helps you with it'))


function testing (word){
    let splitAndGroup = "";
    let counter = 1;
    for (let i = 1; i <= word.length; i ++){
        if(word.charAt(i-1) === word.charAt(i)){
            counter ++;
        } else {
            splitAndGroup += word.charAt(i-1) + counter;
            counter = 1;
        }
    }
    // const groupedLetters = word.split("").reduce((result, current) => {
    //     result[current]  = result[current] +1 || 1;
    //     return result;
    // }, {})

    console.log(splitAndGroup);

}


testing ("aaaaabbbbcccaaaaaaan")