
// Try to figure out for yourself what’s logged here.
function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30,
};
var personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // -> { name: 'Alex', age: 25 }
console.log(personObj2); // -> { name: 'John', age: 50 }

/*
REF: https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
Remember that assignment through function parameters is essentially the same as assignment with =. 
The variable person in the function contains a reference to the personObj1 object, 
so initially it acts directly on that object. Once we reassign person to a new object, 
it stops affecting the original.
This reassignment does not change the object that personObj1 points to in the outer scope. 
person has a new reference because it was reassigned but this reassignment doesn’t change 
personObj1.

The same concept works in the following example
*/

function changeBoolean(value) {
    value = true;
    return value
}

let boolean1 = false;

let boolean2 = changeBoolean(boolean1);
console.log('value boolean1', boolean1);
console.log('value boolean2', boolean2);
