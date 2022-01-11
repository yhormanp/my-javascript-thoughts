// ways to change the contex, the value of this, when we are using a different object with a different method
const book = {
  title: "Brave New World",
  author: "Aldous Huxley",
};

function longerSummary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  );
}

longerSummary("terror", 1979); // undefined was written by undefined. It is a terror novel written in 1979.
// this happens because longerSummary cannot find the value of this, it assumes THIS is the global/window object and there are not title of author properties

longerSummary.call(book, "terror", 1979); //Brave New World was written by Aldous Huxley. It is a terror novel written in 1979.

// adding new properties to an existent object
function addingDetails(genre, year) {
  this.genre = genre;
  this.year = year;
  console.log(
    `${this.title} was written by ${this.author}. It is a ${this.genre} novel written in ${this.year}.`
  );

  console.log("this value", this);
}

addingDetails("terror", 1979); //undefined was written by undefined. It is a terror novel written in 1979.
// Here this.genre, and this.year appears because they were added to the global/window object at the beggining of the function
addingDetails.call(book, "terror", 1979); //Brave New World was written by Aldous Huxley. It is a terror novel written in 1979.
// Here the book context was modified, genre and year properties added and the value of this is the book object

//IMPORTANT PITFALL
//If the method to change context through call or apply is an arrow function, the value of THIS by default  it's global/windows object
// the reason can be find in the section THIS, where it's explained why THIS thake the value of global/window in an arrow function

//just applying the same actions from before in the function, but in this case using an arrow function
const addingDetails2 = (genre, year) => {
  this.genre = genre;
  this.year = year;
  console.log(
    `${this.title} was written by ${this.author}. It is a ${this.genre} novel written in ${this.year}.`
  );

  console.log("this value", this);
};

addingDetails2('Terror', 1979); //undefined was written by undefined. It is a Terror novel written in 1979.
addingDetails2.call(book, 'Terror', 1979); // undefined was written by undefined. It is a Terror novel written in 1979.
// here the global/window object has added genre and year, that why those values appears in the text printed by console
