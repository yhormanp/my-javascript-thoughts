//Create a JavaScript Promise that, after a delay of 2 seconds, either resolves with the message "Hello World" or rejects with the error message "Error occurred".
// The outcome (resolve or reject) should be determined by a random condition, ensuring a 50/50 chance of either occurring each time the code runs.

// const randomPromise = new Promise((resolve, reject) => {
//   const successMessage = 'Hello World';
//   const errorMessage = 'Error occurred';
//   setTimeout(() => {
//     const shouldResolve = Math.random() > 0.5;
//     if (shouldResolve) {
//       resolve(successMessage);
//     } else {
//       reject(errorMessage);
//     }
//   }, 2000);
// });


// randomPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });



async function randomPromise2 () {
    return new Promise((resolve, reject)=> {
        const successMessage = 'Hello World';
        const errorMessage = 'Error occurred';
        setTimeout(() => {
          const shouldResolve = Math.random() > 0.5;
          if (shouldResolve) {
            resolve(successMessage);
          } else {
            reject(errorMessage);
          }
        }, 2000);
    })
}
randomPromise2()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
