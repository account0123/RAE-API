const RAE = require('../src/RAE');

const debug = false;
const rae = new RAE(debug);

async function buscar(palabra){
	const search = await rae.searchAnagram(palabra);
	const anagrams = search.results;

	let i = 0;
	for (const anagram of anagrams) {
		console.log(`${i}. ${anagram.word}\n`);
		i++;
	}
}

buscar('ramo');