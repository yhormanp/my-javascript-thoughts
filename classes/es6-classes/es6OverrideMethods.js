/*
Animal class
*/

class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  
  }
  

  /*
Rabbit class
Overriding stop method
*/
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  
    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.stop(); // White Rabbit stands still. White Rabbit hides!