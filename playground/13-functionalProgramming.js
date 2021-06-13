var log = function(message) {
  console.log(message);
};

log("In JavaScript, functions are variables");

//arrow function
const log = message => {
  console.log(message);
};

//since functions are variables, they can be added to objects
const obj = {
  message: "They can be added to objects like variables",
  log(message) {
    console.log(message);
  }
};

obj.log(obj.message);

//can be inserted into arrays as well
const messages = [
  "They can be inserted into arrays",
  message => console.log(message),
  "like variables",
  message => console.log(message)
];

messages[1](messages[0]); // They can be inserted into arrays
messages[3](messages[2]); // like variables


const insideFn = error => {
  error("They can be sent to other functions as arguments");
};
// They can be sent to other functions as arguments
insideFn(message => console.log(message));


//They can also be returned from other functions, just like variables:
const createScream = function(logger) {
  return function(message) {
    logger(message.toUpperCase() + "!!!");
  };
};

const scream = createScream(message => console.log(message));

scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");

//re-written as a higher order function
const createScream = logger => message => {
  logger(message.toUpperCase() + "!!!");
};

