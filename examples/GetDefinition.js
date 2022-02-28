const RAE = require('../src/RAE');

const debug = false;
const rae = new RAE(debug);

async function start(){
	const search = await rae.searchWord('hola');
	const first_result = search.getRes()[0];

	const wordId = first_result.getId();
	const result = await rae.fetchWord(wordId);
	const definitions = result.getDefinitions();

	let i = 1;
	console.log(`Definición de ${first_result.getHeader()}`);
	for (const definition of definitions) {
		console.log(`${i}. Tipo: ${definition.getType()}\n`);
		console.log(`    Definición: ${definition.getDefinition()}\n\n`);
		i++;
	}
}

start();