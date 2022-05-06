/*
Rotate the String k Times in the Left Direction
Along with Numbers, strings are the most commonly used data types in Javascript. 
An experienced JavaScript developer should know how to work with strings and 
should have the proper knowledge of in-built string functions.

A string along with a number will be the input. 
example
let string = "javascript"
let n = 2
result = "vascriptja"
*/

let string = "javascript"
function rotateString(text, kTimes){
    const initialString = text.substring(kTimes)
    const endingString = text.substring (0, kTimes)
    return `${initialString}${endingString}`
}

console.log(rotateString(string, 2));