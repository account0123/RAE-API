/**
 * Resultado de búsqueda de una palabra
 */
class Result {
	/** @type {number} */
	#grp;
	/** @type {string} */
	#header;
	/** @type {string} */
	#id;
	constructor(res){
		if(res.grp) this.#grp = res.grp;
		if(res.header) this.#header = res.header.replace(/<\/?i>/g,'');
		if(res.id) this.#id = res.id;
	}

	isGrp(){ return this.#grp === undefined }
	isHeader(){ return !!this.#header }
	isId(){ return !!this.#id }
	getGrp() { return this.#grp }
	getHeader(){ return this.#header }
	getId(){ return this.#id }

	get id(){return this.#id}
	get header(){return this.#header}
	get group(){return this.#grp}
}

module.exports = Result;