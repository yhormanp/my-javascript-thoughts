/*
Promise.any() is useful to perform independent async operations in a parallel and race manner, 
to get the value of any first fulfilled promise.

You can extract the value of the first promise using a then-able syntax 
anyPromise.then(firstValue => {
 firstValue; // The value of the first fulfilled promise
});

or using an async/await syntax:
const firstValue = await anyPromise;
firstValue; // The value of the first fulfilled promise

source: https://dmitripavlutin.com/promise-any/
*/

// functions to resolver or reject 



function resolveTimeout(value, delay) {
    return new Promise((resolve) => setTimeout(() => {
        resolve(value);
    }, delay))
}

function rejectTimeout(reason, delay) {
    return new Promise((r, reject) => setTimeout(() => {
        reject(reason);
    }, delay))
}

// SCENARIO 1: both Promises will be  resolve, 1 at 1 second and the 2nd at 2 seconds
// the response will be the first promise resolved, the rest of the responses will be ignored


//wait
async function resolveScenario1() {


    const promise = Promise.any([
        resolveTimeout(['potatoes', 'tomatoes'], 1000),
        resolveTimeout(['oranges', 'apples'], 2000),
    ])
    const list = await promise;

    console.log('List scenario1', (list)) // ['potatoes', 'tomatoes']

}

resolveScenario1();


// SCENARIO 2 : One promise is rejected
// the rejections will be ignored
async function resolveScenario2() {
    const promise = Promise.any([
        rejectTimeout(['potatoes', 'tomatoes'], 1000),
        resolveTimeout(['oranges', 'apples'], 2000),
    ])

    //wait
    const list = await promise;

    console.log('List scneario 2', (list)) // [ 'oranges', 'apples' ]
}


resolveScenario2();

// SCENARIO 3: all promises are rejected
//What if the grocery is out of both vegetables and fruits? In such a case both promises reject:
async function resolveScenario3() {
    const promise = Promise.any([
        rejectTimeout(new Error('Out of vegetables!'), 1000),
        rejectTimeout(new Error('Out of fruits!'), 2000)
    ]);
    try {
        // wait...
        const list = await promise;
    } catch (aggregateError) {
        console.log(aggregateError); // logs AggregateError
        console.log(aggregateError.errors);
        // logs [Error('Out of vegetables!'), Error('Out of fruits!')]
    }
}

resolveScenario3()

/*conclusion: Promise.any() is useful to perform independent async operations in parallel in a race manner,
 to get the value of any first successfully resolved promise.
 */