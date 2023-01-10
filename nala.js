const fs = require('fs');
const lex = require('./lex');

const text = fs.readFileSync('./test.ns').toString();
console.log(lex(text));
