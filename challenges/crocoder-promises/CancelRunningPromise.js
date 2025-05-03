// https://www.crocoder.dev/blog/promises-exercises/
//  Cancel a running Promise
// Create a Promise that simulates a data fetching operation with a delay. Introduce a cancellation token that can be used to
//  cancel the Promise before it resolves.

// If the operation is cancelled, the Promise should reject with a "Cancelled" message; otherwise, it should resolve normally.

// Cancel it!

//BASIS
// function createCancellationToken() {
//     let cancel;
//     const token = new Promise((_, reject) => {
//         cancel = () => reject(new Error('Cancelled'));
//     });
//     return { token, cancel };
// }

// const { token, cancel } = createCancellationToken();

// const fetchPromise = fetchData(token);

// // Simulate user cancellation after 1.5 seconds
// setTimeout(() => {
//     cancel();
// }, 1500);

// fetchPromise
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));

//BASIS

function createCancellationToken() {
  let cancel;
  const token = new Promise((_, reject) => {
    cancel = () => reject(new Error('Cancelled'));
  });
  return { token, cancel };
}

const { token, cancel } = createCancellationToken();

const fetchData = (cancellationToken) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 3000);
  });

  cancellationToken.token.catch(() => {
    reject(new Error('Promise was cancelled'));
  });
};

const fetchPromise = fetchData(token);

// Simulate user cancellation after 1.5 seconds
setTimeout(() => {
  cancel();
}, 1500);

fetchPromise
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
