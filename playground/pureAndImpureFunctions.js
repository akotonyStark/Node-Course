const person = {
  name: 'John',
  canRead: false,
  canWrite: false
}

//impure function
function selfEducate(){
  person.canRead = true;
  person.canWrite = true;
  return person
}

selfEducate();
console.log(person)// {name: John, canRead: true, canWrite: true}

