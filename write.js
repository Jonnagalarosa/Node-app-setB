const fs = require('fs')

const write = function(note={}) {
    fs.writeFileSync('data.txt', note)
}

module.exports = write