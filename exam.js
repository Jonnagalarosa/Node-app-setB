const add = require('./add')
const read = require('./read')


//get users input
const cmd = process.argv;

if(cmd[2] === 'add') {
    // build the object
    const note = {
        Employee: cmd[3],
        Role: cmd[4],
        Department: cmd[5]
    }

    // get note.txt content
    const oldNote = read()

    // add this newNote to Note.txt
    add(note,oldNote);

}

// Read Notes.txt
if(cmd[2] === 'read') {
    // Import present
    const present = require('./present')

    present(read())
}



