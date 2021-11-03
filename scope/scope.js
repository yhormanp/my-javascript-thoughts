function myFunction () {
    var x = 'declare inside myFunciton'; // x can  only be used inside myFunction
    console.log('inside myFunction');
    console.log(x);
}

console.log(x) // x is not defined; cannot be access outer from myFunciton