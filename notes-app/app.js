const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
    //const add = require('./utils.js')
const notes = require('./notes.js')


//console.log('app.js')
//console.log(name)

//use the require function to import modules. in this case the file module
//const fs = require('fs')

//fs.writeFileSync('notes.txt', 'This is the content of the file created by nodeJs. Pretty cool huh?')

//appending content to the file created.
//fs.appendFileSync('notes.txt', ' Cant wait to 


// const sum = add(6,-8)
// console.log(sum)

// let message = getNotes("This is a secret note")
// console.log(message)

// console.log(validator.isEmail('tonystark@gmail.com'))
// console.log(validator.isEmail('tonystark'))

// console.log(validator.isURL('https://akwaabaevolution.com'))

// console.log(chalk.green('Hello chalk'))
// console.log(chalk.bgGreen('Hello background color'))
// console.log(chalk.bgRed.blue.bold('Hello background color'))
// console.log(chalk.bgYellow.blue.inverse('Hello background color'))

//prints out an array of arguments added globally to the program
// console.log(process.argv)
// console.log(process.argv[2])

// const command = process.argv[2]

// if(command == 'add'){
//     console.log('adding note...')
// }
// else{
//     console.log('removing note...')
// }

//console.log(process.argv)

//customize yargs verions
yargs.version('1.1.0')


//creating add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Contents of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        //console.log('Adding a new note...', argv.title, argv.body)
        //console.log("Title: " + argv.title)
        //console.log("Body: " + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

//creating remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//creating get command
yargs.command({
    command: 'get',
    describe: 'Getting a note',
    handler() {
        notes.getNotes()
    }
})

//creating update command
yargs.command({
    command: 'update',
    describe: 'Updating a new note',
    handler() {
        console.log('Updating a note...')
    }
})

//creating list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(argv) {
        notes.listNotes()
    }
})

//creating read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title'
        }
    },
    handler(argv) {
        console.log('Reading a note...', argv.title)
    }
})


console.log(yargs.argv)