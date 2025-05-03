//https://www.crocoder.dev/blog/promises-exercises/

// The fastest response wins
// Using fetchSimulator simulate fetching data from three different URLs with a twist.

// Each "fetch" will be represented by a Promise that resolves after a delay taken from the delays array.

// Use Promise.race to get the fastest response!

//
// const delays = [800, 1200, 1000];

// const fetchSimulator = (url, delay) => {
//     return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), delay));
// };





const delays = [1000, 1200, 300];

const fetchSimulator = (url, delay) => {
    return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), delay));
};




const createAndResolvePromises = async () => {
    const listOfPromises = delays.map((delay) => {
      return fetchSimulator(`url${delay}`, delay);
    });
  
    const resolve = await Promise.race(listOfPromises);
  
    console.log('This is the fastest response<', resolve);
  };
  
  createAndResolvePromises()
  

