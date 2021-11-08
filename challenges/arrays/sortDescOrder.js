// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

function myFunction (arr){
    return arr.sort((a,b) => {
        return b-a // order in desc order
        // return a -b // order in asc order
    })
}

console.log(myFunction([1,5,2,8,3,9,4,5]));