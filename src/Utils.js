class Utils {
	static formatBytes(bytes, precision = 2){
		const units = ['B', 'kB', 'mB', 'gB', 'tB'];
		bytes = Math.max(bytes, 0);
		let pow = Math.floor((bytes ? Math.log(bytes) : 0) / Math.log(1024));
		pow = Math.min(pow, units.length - 1);
		bytes /= Math.pow(1024, pow);
		return Math.round(bytes, precision) + units[pow]
	}
	static find_between(string, start, end){
		string = ' ' + string;
		let ini;
		ini = string.indexOf(start);
		if (ini < 1) {
			return '';
		}
		ini += start.length;
		const len = string.indexOf(end, ini) - ini;
		let result = string.substr(ini, len);
		if(result === '') result = string.slice(ini);
		return result;
	}
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