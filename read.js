const fs = require('fs');

const read = function() {
    if(fs.existsSync('./data.txt')) {
        return fs.readFileSync('data.txt', 'utf8');
    } else {
        return '[]'
    }
}

module.exports = read