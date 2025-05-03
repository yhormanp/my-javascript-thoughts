class Base {
  constructor(el = 0) {
    this.el = el;
  }

  plus(...n) {
    this.el = n.reduce((total, el) => (total += el), this.el);
    return this;
  }
}

class IntBuilder extends Base {
  minus(...n) {
    this.el = n.reduce((total, el) => (total -= el), this.el);
    return this;
  }
  multiply(n) {
    this.el = this.el * n;
    return this;
  }
  divide(n) {
    this.el = this.el / n;
    return this;
  }

  mod(n) {
    this.el = this.el % n;
    return this;
  }
  get() {
    return this.el;
  }

  static random(from, to) {
    return Math.floor(Math.random() * (to - from) + from);
  }
}

function StringBuilder(el) {
  Object.assign(this, new Base(el));
}

StringBuilder.prototype = Object.create(Base.prototype);
StringBuilder.prototype.minus = function (n) {
  this.el = this.el.slice(0, -n);
  return this;
};
StringBuilder.prototype.multiply = function (n) {
  this.el = this.el.repeat(n);
  return this;
};

StringBuilder.prototype.divide = function (n) {
  const k = Math.floor(this.el.length / n);
  this.el = this.el.slice(0, k);
  return this;
};

StringBuilder.prototype.remove = function (letter) {
  this.el = this.el.split(letter).join('');
  return this;
};

StringBuilder.prototype.sub = function (from, n) {
  this.el = this.el.substr(from, n);
  return this;
};

StringBuilder.prototype.get = function () {
  return this.el;
};

let strBuilder = new StringBuilder('Hello');
let intBuilder = new IntBuilder(10); // 10;

let strBuilderRes = strBuilder
  .plus(' all', '!') // 'Hello all!'
  .minus(4) // 'Hello '
  .multiply(3) // 'Hello Hello Hello '
  .divide(4) // 'Hell';
  .remove('l') // 'He';
  .sub(1, 1) // 'e';
  .get();

let intBuilderRes = intBuilder
  .plus(2, 3, 2) // 17;
  .minus(1, 2) // 14;
  .multiply(2) // 28;
  .divide(4) // 7;
  .mod(3) // 1;
  .get();

console.log(IntBuilder.random(10, 100));
console.log(StringBuilder.random(10, 100));
console.log('intBuilderRes => ', strBuilderRes); // e
console.log('intBuilderRes =>', intBuilderRes); // 1
