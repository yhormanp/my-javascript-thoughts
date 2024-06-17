
/*
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

*/

function myFunction (x, y) {
    while(x % y !== 0){
        x++;
    }

    return x;
}

console.log(myFunction(1, 23));

