const fs = require('fs')

const add = function(note, oLdNote) {
    const newNote = JSON.parse(oLdNote);
    // add newNote to oLdNote
    newNote.push(note);

    fs.writeFileSync('data.txt', JSON.stringify(newNote));
}

module.exports = add