const RAE = require('../src/RAE');

const debug = false;
const rae = new RAE(debug);

async function definir(palabra){
	const search = await rae.searchWord(palabra);
	const first_result = search.results[0];

	const wordId = first_result.id;
	const result = await rae.fetchWord(wordId);
	const definitions = result.definitions;

	let i = 1;
	console.log(`Definición de ${first_result.header}`);
	for (const definition of definitions) {
		console.log(`${i}. Tipo: ${definition.type}\n`);
		console.log(`    Definición: ${definition.content}\n\n`);
		i++;
	}
}

definir('ajo');