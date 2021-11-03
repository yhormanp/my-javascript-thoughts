/*

INPUT
String: “I am a full stack developer”
EXPECTED OUTPU
Output: “I ma a lluf kcats repoleved”

*/

function wordReverse(word) {
    let  response = ''
    word.split(' ').forEach(segment => {
        console.log(segment.split('').reverse().join(''))
        response+= segment.split('').reverse().join('') + ' ';
    })
    return response
}

console.log(wordReverse('I am a full stack developer'))