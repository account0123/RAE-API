const RAE = require('../src/RAE');

const debug = false;
const rae = new RAE(debug);

async function definir(palabra){
	try {
		const result = await rae.fetchWord(palabra);
		const article = result.articles[0];
		console.debug(article);
		const title = result.word;
		const definitions = article.senses;
		let i = 1;
		console.log(`Definición de ${title}`);
		for (const definition of definitions) {
			console.log(`${definition.raw}\n\n`);
			i++;
		}
	} catch (error) {
		console.error(error);
	}
}

definir('palabra');