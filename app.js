const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Adds a note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Reads a individual note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note added');
    console.log('--')
    console.log('Title: ' + note.title);
    console.log('Body: ' + note.body);
  } else {
    console.log('Error adding note');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  allNotes.forEach((note) => {
    console.log(note);
  })
} else if (command === 'read') {
  var getNote = notes.getNote(argv.title);
  if (getNote) {
    console.log(getNote.body);
  } else {
    console.log('Could not find note');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
