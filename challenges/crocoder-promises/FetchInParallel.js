// Fetch data in parallel
// Using fetchSimulator simulate fetching data from three different URLs in parallel.

// Each "fetch" will be represented by a Promise that resolves after a delay taken from the delays array.

// Use Promise.all to wait for all these Promises to resolve and then process the results.

// //
// const delays = [800, 1200, 1000];

// const fetchSimulator = (url, delay) => {
//     return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), delay));
// };

const delays = [800, 1200, 1000];

const fetchSimulator = (url, delay) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Data from ${url}`), delay)
  );
};

const createAndResolvePromises = async () => {
  const listOfPromises = delays.map((delay) => {
    return fetchSimulator(`url${delay}`, delay);
  });

  const resolve = await Promise.all(listOfPromises);

  console.log('resolve', resolve);
};

createAndResolvePromises()
