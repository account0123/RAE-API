class Utils {
	static get_definitions(html){
    	let definitions = [];
    	let paragraphs = [...html.matchAll(/<p class="j\d?"[^>]*>(.+?)(?=<\/p>)/g)];
    	for(const paragraph of paragraphs){
			const matches = paragraph[1].match(/<abbr[^>]*>(.+?)(?=<\/abbr>)/);
			const type = matches[0].match(/title="(.+)">/)[1]
				.replace(/&#xE1;/g, 'á')
				.replace(/&#xE9;/g, 'é')
				.replace(/&#xED;/g, 'í')
				.replace(/&#xF3;/g, 'ó')
				.replace(/&#xFA;/g, 'ú')
				.replace(/&#xF1;/g, 'ñ');
			
    		const definition = paragraph[1].replace(/<abbr[^>]+>.+?<\/abbr>/, '')
			.replace(/<span class="h">.+<\/span>/g, '')
			.replace(/<span class="n_acep">\S+ <\/span>/g, '')
			.replace(/<[^>]+>/g, '')
			.replace(/&#xE1;/g, 'á')
			.replace(/&#xE9;/g, 'é')
			.replace(/&#xED;/g, 'í')
			.replace(/&#xF3;/g, 'ó')
			.replace(/&#xFA;/g, 'ú')
			.replace(/&#x2016;/g, '||')
			.replace(/&#xF1;/g, 'ñ')
			.replace('sing.', 'singular')
			.replace('pl.', 'plural')
			.replace('t.', 'también')
			.replace('p.', 'poco')
			.trim();
			
			definitions.push({
    	    	type,
    	    	definition
    	  	});
		}
		const body = {'definitions': definitions};
		return JSON.stringify(body);
	}
}

module.exports = Utils;