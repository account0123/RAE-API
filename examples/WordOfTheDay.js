const RAE = require('../src/RAE');

const debug = true;
const rae = new RAE(debug);

const wotd = await rae.getWordOfTheDay();

const word = wotd.getHeader().split(',');
console.log(`La palabra del día es: ${word[0]}\n`);