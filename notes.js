console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  console.log('Adding note');
  
  var notes = [];
  var note = {
    title,
    body
  };
  
  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (error) {
    
  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

const getAll = () => {
  console.log('Getting all notes');
  // my attempt
  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
    for (const note of notes) {
      console.log('Title', note.title);
      console.log('Body', note.body);
    }
  } catch (error) {
    console.log(error);
  }
};

const getNote = (title) => {
  console.log('Getting note', title);
};

const removeNote = (title) => {
  console.log('Removing note', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};