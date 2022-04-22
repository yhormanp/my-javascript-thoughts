//create a function recursive that returns the sum of this array [1, 2, 3, 4, 5, 6]
function sum(arr){
    if(arr.length === 0){
        return 0
    } else{
        return arr[0] + sum(arr.slice(1));
    }

}


console.log( sum([1, 2, 3, 4, 5, 6]) );//21