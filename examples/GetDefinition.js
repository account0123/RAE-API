const RAE = require('../src/RAE');

const debug = true;
const rae = new RAE(debug);

async function start(){
	const search = await rae.searchWord('hola');
	const wordId = search.getRes()[0].getId();

	const result = await rae.fetchWord(wordId);
	const definitions = result.getDefinitions();

	let i = 1;
	for (const definition of definitions) {
		console.log(`${i}. Tipo: ${definition.getType()}\n`);
		console.log(`   Definición: ${definition.getDefinition()}\n\n`);
		i++;
	}
}

start();