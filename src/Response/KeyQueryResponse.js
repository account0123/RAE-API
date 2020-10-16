const Response = require('../Response');
const {IncomingMessage} = require('http');

/**
 * KeyQueryResponse.
 */
class KeyQueryResponse extends Response{
	#keys;
	/**
	 * 
	 * @param {IncomingMessage} response
	 */
	constructor(response){
		super(response);
		if(response.body) this.#keys = response.body;
	}

	/**
	 * 
	 * @returns {boolean} Si o no hay palabras relacionadas con la búsqueda
	 */
	areKeys(){ return this.#keys ? true : false; }

	/**
	 * 
	 * @returns {string[]} Un array de palabras
	 */
	getKeys() { return this.#keys; }
}

module.exports = KeyQueryResponse;