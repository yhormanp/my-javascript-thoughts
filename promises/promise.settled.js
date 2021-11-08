/*
When all input promises are being fulfilled or rejected, in parallel, statusesPromise resolves to an array having their statuses:

{ status: 'fulfilled', value: value } — if the corresponding promise has fulfilled
Or 
{ status: 'rejected', reason: reason } — if the corresponding promise has rejected

*/

// having these functionsƒ

function resolveTimeout(value, delay) {
    return new Promise(
        resolve => setTimeout(() => resolve(value), delay)
    );
}

function rejectTimeout(reason, delay) {
    return new Promise((r, reject) => setTimeout(() => {
        return reject(reason);
    }, delay));
}

// SCENARIO 1 : All promises fulfilled

async function resolveScenario1() {
    const statusPromise = Promise.allSettled([
        resolveTimeout(['potatoes', 'tomatoes'], 1000),
        resolveTimeout(['oranges', 'apples'], 1500)
    ])

    //wait
    const statuses = await statusPromise;
    console.log(statuses)   //  [
    //   { status: 'fulfilled', value: ['potatoes', 'tomatoes'] },
    //   { status: 'fulfilled', value: ['oranges', 'apples'] }
    // ]
}

resolveScenario1();

// SCENARIO 2: One promise rejected

async function resolveScenario2() {
    // Imagine there are no more fruits at the grocery. In such a case, let’s reject the fruits’ promise.

    const statusesPromise = Promise.allSettled([
        resolveTimeout(['potatoes', 'tomatoes'], 1000),
        rejectTimeout(new Error('Out of fruits!'), 1500)
    ]);
    // wait...
    const statuses = await statusesPromise;
    // after 1 second
    console.log(statuses);
    // [
    //   { status: 'fulfilled', value: ['potatoes', 'tomatoes'] },
    //   { status: 'rejected', reason: Error('Out of fruits!') }
    // ]
}

resolveScenario2();


// SCENARIO 3: All promises rejected
async function resolveScenario3() {
    const statusesPromise = Promise.allSettled([
        rejectTimeout(new Error('Out of vegetables!'), 1000),
        rejectTimeout(new Error('Out of fruits!'), 1000)
    ]);
    // wait...
    const statuses = await statusesPromise;
    // after 1 second
    console.log(statuses);
    // [
    //   { status: 'rejected', reason: Error('Out of vegetables!')  },
    //   { status: 'rejected', reason: Error('Out of fruits!') }
    // ]
}

/*
conclusion
Promise.allSettled(promises) lets you run promises in parallel and collect the statuses
(either fulfilled or reject) into an aggregate array.
*/