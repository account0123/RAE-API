const Response = require('../Response');
const Definition = require('./Model/Definition');
const {IncomingMessage} = require('http');

/**
 * WordOfTheDayResponse.
 *
 * @method string getHeader()
 * @method string getId()
 * @method bool isHeader()
 * @method bool isId()
 */
class RandomWordResponse extends Response{
	#definitions = [];
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
		if (body.definitions){
			for (const def of body.definitions){
				this.#definitions.push(new Definition(def));
			}
		}
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
	 * @returns {boolean} Sí o no la palabra tiene definiciones disponibles.
	 */
	areDefinitions(){ return this.#definitions ? true : false; }

	/**
	 * @returns {string} El encabezado de la palabra.
	 */
	getHeader(){ return this.#header; }

	/**
	 * @returns {string} La id de la palabra.
	 */
	getId(){ return this.#id; }

	/**
	 * @returns {object[]} Las definiciones de la palabra en formato JSON.
	 */
	getDefinitions(){ return this.#definitions; }
}

module.exports = RandomWordResponse;
