const fs = require('fs')

// const book = {
//     title: '48 Laws of Power',
//     author: 'Robert Greene'
// }


// const bookJSON = JSON.stringify(book);
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);

//fs.writeFileSync('1-json.json', bookJSON)

//read contents of json file
const dataBuffer = fs.readFileSync('1-json.json')

//convert to string
const dataJSON = dataBuffer.toString()

//parse to JSON obbject
const data = JSON.parse(dataJSON)

//mutate object with my own properties
data.name = 'Thor'
data.planet = 'Asgard'
data.age = 3000

//print out new object
console.log(data)

//stringify new object
const mutatedData = JSON.stringify(data)

//write to json file
fs.writeFileSync('1-json.json', mutatedData)