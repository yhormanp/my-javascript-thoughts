// Chain some Math with Promises
// Input a number, double it, increase it by 10, and then multiply by 3.

const value = 5;

function double(value) {
  return new Promise((resolve) => {
    resolve(value * 2);
  });
}

function addTen(value) {
  return new Promise((resolve) => {
    resolve(value + 10);
  });
}

function multiplyByThree(value) {
  return new Promise((resolve) => {
    resolve(value * 3);
  });
}

double(value)
  .then(addTen)
  .then(multiplyByThree)
  .then((result) => {
    console.log(result);
  });
