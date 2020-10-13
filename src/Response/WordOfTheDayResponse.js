const Response = require('../Response');
const {IncomingMessage} = require('http');

/**
 * WordOfTheDayResponse.
 *
 * @method string getHeader()
 * @method string getId()
 * @method bool isHeader()
 * @method bool isId()
 */
class WordOfTheDayResponse extends Response{
	#header;
	#id;
	/**
	 * 
	 * @param {IncomingMessage} response 
	 */
	constructor(response){
		super(response);
		const body = response.body;
		if (body.header) this.#header = body.header;
		if (body.id) this.#id = body.id; 
	}

	/**
	 * @returns {boolean} Sí o no hay la palabra tiene encabezado.
	 */
	isHeader(){ return this.#header ? true : false;}

	/**
	 * @returns {boolean} Sí o no la palabra tiene id.
	 */
	isId(){ return this.#id ? true : false; }

	/**
	 * @returns {string} El encabezado de la palabra.
	 */
	getHeader(){ return this.#header; }

	/**
	 * @returns {string} La id de la palabra.
	 */
	getId(){ return this.#id; }
}

module.exports = WordOfTheDayResponse;