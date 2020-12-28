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
		let text;
		text = html.replace(/<[^>]+>/g, '');
		text = text.replace('U.', '');
		text = text.replace('Era u.', '');
		text = text.replace('p. us.', '');
		text = text.replace('desus.', '');
		text = text.replace('m.', '');
		text = text.replace('f.', '');
		text = text.replace('t. repetida', '');
		text = text.replace(' interj.', 'interj.');
		let first
		first = Utils.find_between(text, '1.', '.2');
		if (first == '') {
			first = Utils.find_between(text, '1.', '.');
		}
		
		const defs = [first];
		// Puedes encontrar una palabra con más de 20 definiciones?
		for (let i = 2; i < 20; i++) {
			const definition = Utils.find_between(text, i + '.', '.' + ( i + 1 ));
			if(definition != '') defs.push(definition);
			else break;
		}
		let definitions = [];
		for(const def of defs){
			const data = def.split('.');
			definitions.push({'type': data[0], 'definition': (data[1] || '').trim()});
		}
		const body = {'definitions': definitions};
		return JSON.stringify(body);
	}
}

module.exports = Utils;