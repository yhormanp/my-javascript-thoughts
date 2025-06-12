// implement a function named factorial that has one parameter: an integer, 
// . It must return the value of  (i.e.,  factorial).



function factorial (value){
  if (value < 0) {
      return -1;
      }
    else if (value == 0) {
    return 1;
    }
    else {
      return value * (factorial(value -1))
    }
      
 
 
}


console.log('factorial 4 result ', factorial(4) )