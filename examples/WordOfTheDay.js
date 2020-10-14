const RAE = require('../src/RAE');

const debug = true;
const rae = new RAE(debug);

async function start(){
	const wotd = await rae.getWordOfTheDay();
	
	const word = wotd.getHeader();
	console.log(`La palabra del día es: ${word}\n`);
}

start();
