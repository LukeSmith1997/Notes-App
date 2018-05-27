# Notes-App
A note-taking app that uses the terminal. The user can read/write/delete notes using commands in the terminal, notes are persisted using the filesystem.

## How To Use
- Open Terminal and `cd` to the directory.
- Make sure npm is installed on your machine and run `npm install` to install the required packages.

### Adding a note
- `node app.js add -t='Title of note' -b='Description of note'`
(Duplicate notes can't be added).
### Reading a note
- `node app.js read -t='Title of note'`
### Listing all notes
- `node app.js list`
### Removing a note
- `node app.js remove -t='Title of note'`
