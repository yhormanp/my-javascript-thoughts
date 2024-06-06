/*
Person Class
*/

function Person( name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender
}

Person.prototype.getName =  function (){
    return this.name;
}

Person.prototype.getAge = function (){
    return this.age;
}

Person.prototype.getGender = function () {
    return this.gender;
}


/*
Teacher Class
*/

function Teacher ( name, age, gender, subject){
    Person.call(this, name, age, gender);
    this.subject = subject
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.getSubject = function() {
    return this.subject
}


/*
Student Class
*/

function Student (name, age, gender, marks){
    Person.call(this, name, age, gender);
    this.marks = marks;
}


Student.prototype = Object.create(Person.prototype);

Student.prototype.getMarks = function (){
    return this.marks
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