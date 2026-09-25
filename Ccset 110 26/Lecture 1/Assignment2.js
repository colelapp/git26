const prompt = require('prompt-sync')();
let name=prompt("What is your name? ");
let lastName=prompt("What is your last name? ");
console.log(`It is nice to meet you, ${name} ${lastName}!`);