
/* 
Promise.all  se cumple cuando todas las promesas del iterable dado se han cumplido, o es rechazada 
si alguna promesa no se cumple.

The Promise.all() method takes an iterable of promises as an input, and returns a single 
Promise that resolves to an array of the results of the input promises. This returned 
promise will resolve when all of the input's promises have resolved, or if the input 
iterable contains no promises. It rejects immediately upon any of the input promises rejecting 
or non-promises throwing an error, and will reject with this first rejection message / error.
*/


//SCENARIO 1
const promise1 = Promise.resolve(3);
const promise2 = 143;
const promise3 = new Promise(resolve => setTimeout(() => {
    resolve('foo')
}, 100));


Promise.all([promise1, promise2, promise3]).then((values)=> {
    console.log(values); // expected output: Array [3, 143, "foo"]
})


/*SCENARIO 2 : Promise.all fail-fast behavior
Promise.all is rejected if any of the elements are rejected. For example, 
if you pass in four promises that resolve after a timeout and one promise that rejects immediately, 
then Promise.all will reject immediately.
*/


var p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('one');
    }, 500);
})

var p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('two');
    }, 1000);
})
var p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('three');
    }, 1500);
})
var p4 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(new Error('reject'));
    }, 2000);
})

Promise.all([p1,p2,p3,p4])
.then(values => {
    console.log(values ) // Error: reject
})

/*Promise.allSettled will return every promise with a status, fulfilled or rejected*/
