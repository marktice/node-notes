const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't',
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b',
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions,
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {title: titleOptions})
  .command('remove', 'Remove a note', {title: titleOptions})
  .help()
  .argv;
const command = argv._[0];


if (command === 'add') {
  const addedNote = notes.addNote(argv.title, argv.body);
  if (addedNote) {
    console.log('Note created');
    notes.logNote(addedNote);
  } else {
    console.log('Note could not be added, title taken');
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  for (const note of allNotes) {
    notes.logNote(note);
  }
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
