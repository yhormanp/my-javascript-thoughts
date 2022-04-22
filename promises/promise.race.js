/*
The Promise.race() method returns a promise that fulfills or rejects as soon as one of the 
promises in an iterable fulfills or rejects, with the value or reason from that promise.
*/

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("one");
  }, 500);
});

const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 490, "two");
});

Promise.race([promise1, promise2]).then((values) => {
  console.log(values);
  // Both resolve, but promise2 is faster
});

// expected output: "two"

/*
COMPARISON  BETWEEN PROMISE.RACE AND PROMISE.ANY    
EX: race -  Promise.race takes the first settled 
*/

const promiseA = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promiseB = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.race([promiseA, promiseB])
  .then((value) => {
    console.log("succeeded with value:", value);
  })
  .catch((reason) => {
    // Only promise1 is fulfilled, but promise2 is faster
    console.log("failed with reason:", reason);
  });
// expected output: "failed with reason: two"

/*
COMPARISON  BETWEEN PROMISE.RACE AND PROMISE.ANY    
EX: any -  Promise.any takes the first fulfilled (finished successfully)
*/

Promise.any([promiseA, promiseB])
  .then((value) => {
    // Only promise1 is fulfilled, even though promise2 settled sooner
    console.log("succeeded with value:", value);
  })
  .catch((reason) => {
    console.log("failed with reason:", reason);
  });
// expected output: "succeeded with value: one"
