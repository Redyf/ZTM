// change everything below to the newer Javascript!

// let + const
var a = "test";
var b = true;
var c = 789;
a = "test2";

// Answer
let a = "test";
let b = true;
let c = 789;
a = "test2";

// Destructuring
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Answer
const betterPerson = ({ firstName, lastName, age, eyeColor } = person);

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// Answer
let firstName = betterPerson.firstName;
let lastName = betterPerson.lastName;
let age = betterPerson.age;
let eyeColor = betterPerson.eyeColor;

// Object properties
var a = "test";
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c,
};

// Answer
let a = "test";
let b = true;
var c = 789;

let decentObj = {
  a: a,
  b: b,
  c: c,
};

// Template strings
var message =
  "Hello " +
  firstName +
  " have I met you before? I think we met in " +
  city +
  " last summer no???";

// Answer
let city = "Salvador";
let betterMessage = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
  return age;
}

// Answer
function isValidAge(age = 10) {
  return age;
}

// Symbol
// Create a symbol: "This is my first Symbol"

// Answer
let firstSymbol = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username = "Mateus", location = "Brazil") {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

// Answer
const whereAmI = (username, location) => {
  switch ((username, location)) {
    case ("Mateus", "Brazil"):
      return "I am not lost";
    default:
      return "I am totally not lost xD";
  }
};
