function largestOfFour(arr) {
  const values = arr.map((val) => {
    return Math.max.apply(Math, val);
  });
  return values;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

function maxValueInArray(arr) {
  return Math.max(...arr);
}

console.log('MaxValue in Array ' ,maxValueInArray([5, 9, 2, 7, 4]));
