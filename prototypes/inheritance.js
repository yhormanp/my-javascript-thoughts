/* 
to use inheritance and this way sharing properties and methods to another types created like Bird and Dog 
you need to create the supertype with the base structure.
*/

//super type
function Animal() {}
// supertype prototype definition
// methods and properties that will have in common with the children objects
Animal.prototype = {
  constructor: Animal,
  eat() {
    console.log("I am an animal, nom, nom, nom");
  },
  salute() {
    console.log(`hello my name is ${this.name} and I have ${this.numLegs} legs`);
  },
};

function Dog() {}

function Bird() {}

Dog.prototype = Object.create(Animal.prototype);
Bird.prototype = Object.create(Animal.prototype);

let Beagle = new Dog();

Beagle.name = "max"

//ok

Beagle.eat()
Beagle.salute();


//OVERRIDING METHODS    
Bird.prototype.eat = function (){
    console.log('peck peck peck');
}


let duck = new Bird();
duck.name = "manolo";

duck.eat();
duck.salute();


// setting own properties to each new children class
// Dog.prototype.name="Lukas";
// Dog.prototype.numLegs = 4;

// Bird.prototype = {
//   name: "Rebeca",
//   numLegs: 2,
// };
