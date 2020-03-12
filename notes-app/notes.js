const fs = require('fs');
const chalk = require("chalk");


const getNotes = () =>  {
    return "Your notes...";    
};

const addNote = (title, body) => {
    const notes = loadNotes();
    let message = ""
    const duplicateNotes = notes.filter(note => note.title === title);
    
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
};

const removeNote = (title) => {
    const notes = loadNotes();
    let message = ""
    const notesToKeep = notes.filter(note => note.title !== title);

    if (notesToKeep.length < notes.length) {       
        saveNotes(notesToKeep);
        message = chalk.greenBright.inverse("Note removed!");        
    } else {
        message = chalk.redBright.inverse("No note found!");        
    }
    
    console.log(message);    
};

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length > 0) {
        console.log(chalk.greenBright.inverse("Listing notes..."));        
        notes.forEach(note => {    
            console.log(chalk.italic.inverse(note.title));        
            });

    } else {
        console.log(chalk.redBright.inverse("No note found!"));               
    }    
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);    
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {  
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString());        
    } catch (error) {
        return []        
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};