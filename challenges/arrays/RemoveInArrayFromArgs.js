/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

inputs
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].

destroyer([2, 3, 2, 3], 2, 3) should return [].

destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
*/


// option 1

function destroyer(arr) {
    const valuesToRemove = Array.from(arguments).slice(1);
    
    return arr.filter((value)=>{
      return !valuesToRemove.includes(value);
    })
  }
  
console.log(  destroyer([1, 2, 3, 1, 2, 3], 2, 3)  );


//   option 2

function destroyer2(arr, ...valuesToRemove) {
    
    return  arr.filter((value)=>{
      return !valuesToRemove.includes(value);
    })
  }
  
  console.log( destroyer2([1, 2, 3, 1, 2, 3], 2, 3)  );
