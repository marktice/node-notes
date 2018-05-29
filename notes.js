console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (error) {
    return []; 
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  console.log('Adding note');
  const notes = fetchNotes();
  const note = {
    title,
    body
  };
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log('Getting all notes');

  try {
    const notesString = fs.readFileSync('notes-data.json');
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