console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
console.log('Command', command);
console.log('Yargs', argv);

if (command === 'add') {
  const addedNote = notes.addNote(argv.title, argv.body);
  if (addedNote) {
    console.log('Note created');
    notes.logNote(addedNote);
  } else {
    console.log('Note could not be added, title taken');
  }

} else if (command === 'list') {
  notes.getAll();

} else if (command === 'read') {
  const returnedNote = notes.getNote(argv.title);
  if (returnedNote) {
    console.log('Note found');
    notes.logNote(returnedNote);
  } else {
    console.log('Note not found');
  }

} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
};