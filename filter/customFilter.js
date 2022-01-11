//create your own filter function

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  // Only change code above this line
  this.forEach(value =>{
    if(callback(value)){
      newArray.push(value)
    }
  }) 
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});