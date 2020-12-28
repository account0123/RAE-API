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
    let paragraphs = [...html.matchAll(/<p class="j"[^>]*>(.+?)(?=<\/p>)/g)];
    for (const paragraph of paragraphs) {
      const types = [...paragraph[1].matchAll(/<abbr[^>]*>(.+?)(?=<\/abbr>)/g)];
      const definition = paragraph[1]
        .replace(/<abbr[^>]+>.+?<\/abbr>/g, '')
        .replace(/<span[^>]+>.+?<\/span>/g, '')
        .replace(/<[^>]+>/g, '');
			definitions.push({
        type: types.map(function(type) { return(type[1]); }).join(' '),
        definition
      });
		}
		const body = {'definitions': definitions};
		return JSON.stringify(body);
	}
}

module.exports = Utils;