// Node.js library test

const mocha = require('mocha');
const base256 = require('../base256');

encrypted = base256.encrypt('Hello world!');
decrypted = base256.decrypt(encrypted);

console.log("Enctrypted: ", encrypted);
console.log("Decrypted: ", decrypted);