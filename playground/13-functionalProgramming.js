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
