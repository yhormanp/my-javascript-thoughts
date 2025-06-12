// // Complete the following functions in the editor below:

// // getArea(length, width): Calculate and return the area of a rectangle having sides  and .
// // getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides  and .
// // The values returned by these functions are printed to stdout by locked stub code in the editor.

// // Constraints
// //  length and widht must be >= 1 and <= 1000

// example
// Explanation 0

// The area of the rectangle is width * length.
// The perimeter of the rectangle is  2 * (width + length).

/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
  let area;
  if (length >= 1 && width >= 1) {
    if (length <= 1000 && width <= 1000) {
      // Write your code here
      area = length * width;
    }
  }

  return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  if (length >= 1 && width >= 1) {
    if (length <= 1000 && width <= 1000) {
      // Write your code here
      perimeter = 2 * (length + width);
    }
  }

  return perimeter;
}

console.log(' Area from 3 and 4.5  is: ', getArea (3, 4.5));

console.log(' Perimeter from 3 and 4.5  is: ', getPerimeter (3, 4.5));
