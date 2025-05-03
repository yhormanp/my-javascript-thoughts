
/*
Person Class
*/
class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getName () {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getGender () {
        return this.gender;
    }
}


/*
Teacher Class
*/

class Teacher  extends Person{
    constructor(name, age, gender, subject){
        super (name, age, gender);
        this.subject = subject;
    }


    getSubject(){
        return this.subject;
    }
}


/*
Student Class
*/

class Student extends Person{
    constructor(name, age, gender, marks){
        super ( name, age, gender);
        this.marks = marks;
    }

    getMarks(){
        return this.marks;
    }
}



const teacher = new Teacher('John Doe', 30, 'male', 'Maths');
const student = new Student('Jane Miles', 12, 'female', 88);

console.log(
  'Teacher:',
  teacher.getName(),
  teacher.getAge(),
  teacher.getGender(),
  teacher.getSubject(),
);
console.log(
  'Student:',
  student.getName(),
  student.getAge(),
  student.getGender(),
  student.getMarks(),
);


/// EXAMPLE 2


/*
Animal class
*/
class Animal {
    constructor(name){
        this.speed = 0 ;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with the speed ${this.speed}`);
    }

    stop(){
        this.speed = 0 ;
        console.log(`${this.name} stands still`)
    }
}



/*
Rabbit class
*/

class Rabbit extends Animal {
    hide(){
        console.log(`${this.name} hides`)
    }
}


let rabbit  = new Rabbit('White Rabbit');
rabbit.run(5);// White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!