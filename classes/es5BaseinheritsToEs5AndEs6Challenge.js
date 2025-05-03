// class Base {
//   constructor(value) {
//     this.value = value;
//   }

//   plus(values) {}
//   get() {
//     return this.value;
//   }
// }

//********** Builder */

function Builder(values) {
  this.value = values;
}

// Builder.prototype.plus = function (values){
// }

Builder.prototype.get = function () {
  return this.value;
};

//**********Int Builder */

class IntBuilder extends Builder {
  constructor(value) {
    super(parseInt(value) || 0);
  }

  plus(...values) {
    values.forEach((value) => {
      this.value += value;
    });

    return this;
  }

  minus(...values) {
    values.forEach((value) => {
      this.value -= value;
    });

    return this;
  }

  multiply(value) {
    this.value *= value;
    return this;
  }

  divide(value) {
    this.value = this.value / value;
    return this;
  }

  mod(value) {
    this.value = this.value % value;

    return this;
  }
}

//**********String Builder */

function StringBuilder(value) {
  Builder.call(this, String(value));
}

StringBuilder.prototype = Object.create(Builder.prototype);

StringBuilder.prototype.plus = function (...values) {
  for (val of values) {
    this.value += val;
  }
  return this;
};

StringBuilder.prototype.minus = function (value) {
  const newEnd = this.value.length - parseInt(value);
  this.value = this.value.substring(0, newEnd);

  return this;
};

StringBuilder.prototype.multiply = function (value) {
  const newText = this.value.repeat(value);
  this.value = newText;

  return this;
};

StringBuilder.prototype.divide = function (value) {
  const qtyOfChars = Math.floor(this.value.length / value);
  this.value = this.value.substring(0, qtyOfChars);

  return this;
};

StringBuilder.prototype.remove = function (value) {
  let newText = "";
  this.value.split("").forEach((char) => {
    if (char !== value) {
      newText += char;
    }
  });
  this.value = newText;

  return this;
};

StringBuilder.prototype.sub = function (origin, end) {
  this.value = this.value.slice(origin, origin + end);
  return this;
};

// const intBuilder = new IntBuilder(10);
// console.log("intbuilder get, ", intBuilder.get());
// console.log("intbuilder plus, ", intBuilder.plus(1, 5, 4, 6));

let intBuilder2 = new IntBuilder(10); // 10;
console.log(
  "final result intBuilder, ",
  intBuilder2
    .plus(2, 3, 2) // 17;
    .minus(1, 2) // 14;
    .multiply(2) // 28;
    .divide(4) // 7;
    .mod(3) // 1;
    .get() // -> 1;
);

let strBuilder = new StringBuilder("Hello"); // 'Hello';
console.log(
  "final result Stringbuilder",
  strBuilder
    .plus(" all", "!") // 'Hello all!'
    .minus(4) // 'Hello '
    .multiply(3) // 'Hello Hello Hello '
    .divide(4) // 'Hell';
    .remove("l") // 'He';
    .sub(1, 1) // 'e';
    .get()
);
