// ***************************************************************
// Turn an array of numbers into a total of all the numbers using .reduce()
// function total(arr) {
//     // your code here
// }


// function total(arr) {
//     // your code here
//     const total = arr.reduce((total, value) => {
//         total += value;
//         return total;
//     }, 0)

//     return total
// }

// console.log(total([1, 2, 3])); // 6

// ***************************************************************
// Turn an array of numbers into a long string of all those numbers.
// function stringConcat(arr) {
//     //    // your code here 
// }

// function stringConcat(arr) {
//    // your code here 
//    const result = arr.reduce((text, value) => {
//     text += value.toString();
//     return text;

//    },"")
//    return result
// }

// console.log(stringConcat([1,2,3])); // "123"

// ***************************************************************

// Turn an array of voter objects into a count of how many people voted

// function totalVotes(arr) {
//     // your code here    
//  }

// function totalVotes(arr) {
//     // your code here  
//     const totalVotes = arr.reduce((counter, votedData) =>{
//         if (votedData.voted === true){
//             ++counter; 
//         }
//         return counter;
//     },0)  
//     return totalVotes
//  }

//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7



// ***************************************************************
// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

// function shoppingSpree(arr) {
//     // your code here    
//  }

// function shoppingSpree(arr) {
//     // your code here  
//     const total = arr.reduce((counter, data) => {
//         counter += data.price;
//         return counter
//     },0)  
//     return total;
//  }


//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];

//  console.log(shoppingSpree(wishlist)); // 227005

// ***************************************************************
//Given an array of arrays, flatten them into a single array
// function flatten(arr) {
//     // your code here    
//  }

// function flatten(arr) {
//     // your code here  
//     const flattenArray =  arr.reduce( (mainArray, data)=> {
//         data.forEach((value) => {
//             mainArray.push(value);
//         })
//         return mainArray;
//     },[]);

//     return flattenArray
// }

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// ***************************************************************

/*
Given an array of potential voters, return an object representing the results of the vote
Include how many of the potential voters were in the ages 18-25, how many from 26-35, 
how many from 36-55, and how many of each of those age ranges actually voted. 
The resulting object containing this data should have 6 properties.
See the example output at the bottom.
*/

// var voters = [
//     { name: 'Bob', age: 30, voted: true },
//     { name: 'Jake', age: 32, voted: true },
//     { name: 'Kate', age: 25, voted: false },
//     { name: 'Sam', age: 20, voted: false },
//     { name: 'Phil', age: 21, voted: true },
//     { name: 'Ed', age: 55, voted: true },
//     { name: 'Tami', age: 54, voted: true },
//     { name: 'Mary', age: 31, voted: false },
//     { name: 'Becky', age: 43, voted: false },
//     { name: 'Joey', age: 41, voted: true },
//     { name: 'Jeff', age: 30, voted: true },
//     { name: 'Zack', age: 19, voted: false }
// ];

// function voterResults(arr) {
//     // your code here

//     const result = {
//         numYoungVotes: 0,
//         numYoungPeople: 0,
//         numMidVotesPeople: 0,
//         numMidsPeople: 0,
//         numOldVotesPeople: 0,
//         numOldsPeople: 0
//     }

//     const verification = arr.reduce((response, data)=> {
//         if( data.age >=18 && data.age <=25){
//             response["numYoungPeople"] += 1;
//             if( data.voted){
//                 response["numYoungVotes"] += 1;
//             } 
//         } else if(  data.age >=26 && data.age <=35){
//             response["numMidsPeople"] += 1;
//             if( data.voted){
//                 response["numMidVotesPeople"] += 1;
//             } 
//         } else if(  data.age >=36 && data.age <=55){
//             response["numOldsPeople"] += 1;
//             if( data.voted){
//                 response["numOldVotesPeople"] += 1;
//             } 
//         }
//         return response;
//     }, result)
//     return result

// }

// console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/



// ***************************************************************
// given the following array, 

const transactions = [
    ['usd','buy', 5000],
    ['mxn','buy', 8000],
    ['usd','sell', 12000],
    ['gbp','buy', 8000],
    ['eur','sell', 7000],
    ['usd','sell', 18000],
    ['gbp','buy', 11000],
    ['mxn','buy', 2000],
     ['usd','buy', 5000],
]
// group the data by currency and by transaction type to obtain
//  {
//     // currency: [sums for buy, sums for sell]
//     usd: [10000, 30000],
//     gbp: [19000, 0],
//     eur: [0, 7000],
//     mxn: [10000, 0],
// }

function groupedTransactions (arr) {
    const grouped = arr.reduce((totalgrouped, data) => {
        const existentData =  totalgrouped[data[0]];
        if( data[1] === 'buy'){
            totalgrouped[data[0]] = existentData ? [existentData[0] + data[2], existentData[1]] : [data[2] , 0];
        } else if (data[1] === 'sell') {
            totalgrouped[data[0]] = existentData ? [existentData[0], existentData[1] + data[2]]: [0, data[2]]
        }
        
        return totalgrouped;
    }, {})

    return grouped;
}

console.log(' grouped Transactions', groupedTransactions(transactions))