// crear 2 personas, una que estè estudiando y otra que no
// una debe contener, nombre edad, genero y carrera

class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  saludar() {
    console.log(
      `hola mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}`
    );
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, genero, carrera) {
    super(nombre, edad, genero);
    this.carrera = carrera;

  }
  saludar () {
    console.log( `hola mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.genero} y estudio ${this.carrera}`)
  }


}


const $persona = new Persona('andres', 23, 'masc')
const $estudiante = new Estudiante('Milton', 18, 'masc', 'programacion')

$persona.saludar()
$estudiante.saludar()