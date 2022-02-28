/**
 * Res.
 *
 * @method number getGrp()
 * @method mixed getHeader()
 * @method mixed getId()
 * @method bool isGrp()
 * @method bool isHeader()
 * @method bool isId()
 */
class Res{
	#grp;
	#header;
	#id;
	constructor(res){
		if(res.grp) this.#grp = res.grp;
		if(res.header) this.#header = res.header.replace(/<\/?i>/g,'');
		if(res.id) this.#id = res.id;
	}

	/**
	 * @returns {boolean} Sí o no hay la palabra tiene grp.
	 */
	isGrp(){ return this.#grp ? true : false; }
	/**
	 * @returns {boolean} Sí o no hay la palabra tiene encabezado.
	 */
	isHeader(){ return this.#header ? true : false;}

	/**
	 * @returns {boolean} Sí o no la palabra tiene id.
	 */
	isId(){ return this.#id ? true : false; }

	/**
	 * @returns {number}
	 */
	getGrp() { return this.#grp; }
	/**
	 * @returns {string} El encabezado de la palabra.
	 */
	getHeader(){ return this.#header; }

	/**
	 * @returns {string} La id de la palabra.
	 */
	getId(){ return this.#id; }

}

module.exports = Res;