// Create a Square class that has a constructore and a method with a text to print the area
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  printAreaMessage(width, height) {
    return `Area width ${width} and ${height} is: `;
  }
}

// create a method called area using prototype
Rectangle.prototype.area = function () {
  return `${this.printAreaMessage(this.width, this.height)} ${
    this.width * this.height
  }`;
};

const myRectangle = new Rectangle(3, 4.5);

console.log('Calcularing Area from Rectangle ', myRectangle.area());

// create a class called Square that extends from Rectagle, it has a constructor and uses the method area,
//  but the print message should be override

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  printAreaMessage(width, height) {
    return `this is a different message in  Square with ${width} and ${height}: `;
  }
}

const mySquare = new Square(3);

console.log('Calculating Area from Square ', mySquare.area());
