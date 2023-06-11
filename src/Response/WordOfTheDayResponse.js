const Response = require('../Response');

class WordOfTheDayResponse extends Response{
	/** @type {string} */
	#header;
	/** @type {string} */
	#id;

	constructor(response){
		super(response.header);
		const body = response.body;
		this.#header = body.header;
		this.#id = body.id; 
	}

	isHeader(){ return !!this.#header }
	isId(){ return !!this.#id }
	getHeader(){ return this.#header }
	getId(){ return this.#id }

	get header(){return this.#header}
	get id(){return this.#id}
}

module.exports = WordOfTheDayResponse;