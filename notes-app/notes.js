const fs = require('fs');
const chalk = require("chalk");


const getNotes = function() {
    return "Your notes...";    
};

const addNote = function (title, body) {
    const notes = loadNotes();
    let message = ""
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title                
    })
    
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        
        saveNotes(notes);
        message = chalk.greenBright.inverse('New note added');        
    } else {
        message = chalk.redBright.inverse('Note title taken!');       
    }
    console.log(message);   
}

const removeNote = function (title) {
    const notes = loadNotes();
    let message = ""
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title;
    });

    if (notesToKeep.length < notes.length) {       
        saveNotes(notesToKeep);
        message = chalk.greenBright.inverse("Note removed!");        
    } else {
        message = chalk.redBright.inverse("No note found!");        
    }
    
    console.log(message);    
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);    
    fs.writeFileSync('notes.json', dataJSON);
}

const deleteNote = function(note) {
    const dataJSON = JSON.stringify(note);
    fs.rm
}

const loadNotes = function () {
    try {  
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString());        
    } catch (error) {
        return []        
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}