

/*
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
solution(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
solution(s) = '_'.

There are no characters in this string that do not repeat.

input tests / expected value
"abacabad", "c"
"abacabaabacaba", "_"
"bcb", "c"
"bcccccccccccccyb", "y"
"ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof", "g"
*/

function solution(s) {
    let nonRepeated= null;
    
    for (value of s){
        if(s.indexOf(value) === s.lastIndexOf(value)){
            nonRepeated= value
            return nonRepeated;
        }
    }
    return  nonRepeated ? nonRepeated: '_'
}
