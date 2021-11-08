const myFunc = function (){
    nombre: 'yhorman'
    return `Hola ${this.nombre}`;
}

const myObj = {
    nombre: 'yhorman',
    saludar () {
        return 'Hola interno, soy ' + this.nombre
    }
}

const anotherFunction = function () {
    nombre: 'yhorman';

    
    myMethodSaludar = function (){
        return `Hola y bienvenido ${this.nombre}`
    }

    return myMethodSaludar;
}

console.log( myFunc());
console.log(myObj.saludar());
const saludar = anotherFunction();
console.log(saludar())
console.log(anotherFunction().call({nombre: 'emilio'}));
