// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// EXAMPLE 1 Turn an array of numbers into a total of all the numbers

const numbers = [1, 2, 3];

const total = numbers.reduce((accumulator, element) => {
  return accumulator + element;
}, 0);

console.log(total); // 6

//*************************** */
// EXAMPLE 2 Flatten an array of arrays into a single array
const arrays = [[1, 2], [3, 4], [5]];
const flattened = arrays.reduce((accumulator, element) => {
  return accumulator.concat(element);
}, []);

console.log(flattened); // [1, 2, 3, 4, 5]
//*************************** */
// EXAMPLE 3 Count the occurrences of each element in an array
const names = ['Alice', 'Bob', 'Alice', 'Eve', 'Bob'];
const nameCount = names.reduce((accumulator, element) => {
  accumulator[element] = (accumulator[element] || 0) + 1;
  return accumulator;
}, {});

console.log(nameCount); // { Alice: 2, Bob: 2, Eve: 1 }

//*************************** */
// EXAMPLE 4 Group objects by a property
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 35 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
];

const propertyDefined = 'age';

const groupedObjects = people.reduce((accumulator, element) => {
  accumulator[element[propertyDefined]] = (
    accumulator[element[propertyDefined]] || []
  ).concat(element.name);
  return accumulator;
}, {});

console.log(groupedObjects); // { '25': [ 'Bob', 'Charlie' ], '30': [ 'Alice', 'Bob' ], '35': [ 'Alice' ] }
// EXAMPLE  5: turn an array of voter objects into a count of how many people voted

var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];

const totalVotes = (listOfVoters) => {
  return listOfVoters.reduce((accumulator, element) => {
    return accumulator + (element.voted ? 1 : 0);
  }, 0);
};
console.log('total voters count: ', totalVotes(voters)); // 7
// EXAMPLE 6: Turn an array of objects into a single object with unique keys
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 1, name: 'Item 1 Duplicate' },
];
const uniqueItems = items.reduce((accumulator, element, index) => {
  accumulator[index] = accumulator[index] || element; // Use element.id as the key
  return accumulator; // Return the updated accumulator
}, {});
console.log(uniqueItems);
// {'0': { id: 1, name: 'Item 1' },
//  '1': { id: 2, name: 'Item 2' },
//  '2': { id: 1, name: 'Item 1 Duplicate' }
// }
// EXAMPLE 7: Count the number of occurrences of each character in a string
const string = 'hello world';

const charCount = string.replace(' ','').split('').reduce((accumulator, char) => {
  accumulator[char] = (accumulator[char] || 0) + 1;
  return accumulator;
}, {});
console.log(charCount); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

// EXAMPLE 8: using reduce right to remove duplicates from an array
const arrayWithDuplicates = [1, 2, 3, 1, 2, 4, 5];  
const uniqueArray = arrayWithDuplicates.reduceRight((accumulator, element) => {
  if (!accumulator.includes(element)) {
    accumulator.push(element);
  }
  return accumulator;
}, []);
console.log(uniqueArray); // [5, 4, 2, , 1, 3]