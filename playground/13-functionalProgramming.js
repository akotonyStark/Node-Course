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
