const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => {
    return 'your notes'
}


const listNotes = () => {

    console.log(chalk.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });


}


const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function(note) {
    //     //if (note.title == title)
    //     return note.title == title
    // })

    const duplicateNotes = notes.filter((note) => note.title == title)
        //the method above unfortunately searches through every item even if what we want has been found. below is a better to approach it

    const duplicateNote = notes.find((note) => note.title === title)

    //debugging
    debugger

    //no duplicate was found
    //if (duplicateNotes.length == 0) {
    if (!duplicateNote) {
        notes.push({
                title: title,
                body: body
            })
            // console.log(notes)
            //save updated note
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(title + ' already taken. Note wasn not added')
    }

}

const removeNote = (title) => {
    //before removing a note, we load existing notes into an array
    const notes = loadNotes()

    //find specific note
    const noteToRemove = notes.find(note => note.title == title)

    //debugging
    debugger

    notes.pop(noteToRemove)
    saveNotes(notes)


    /* or you could do this instead */
    // const notesToKeep = notes.filter((note) => note.title !== title)

    // if (notesToKeep.length < notes.length) {
    //     console.log(chalk.bgGreen.white(title, ' successfully removed'))
    // } else {
    //     console.log(chalk.bgRed.yellow(title, ' does not exist'))
    // }
    // saveNotes(notesToKeep)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}