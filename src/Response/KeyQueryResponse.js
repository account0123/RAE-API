const Response = require('../Response');

class KeyQueryResponse extends Response{
	/** @type {string[]} */
	#keys = [];

	constructor(response){
		super(response.header);
		if(response.body) this.#keys = response.body;
	}

	areKeys(){ return this.#keys.length > 0 }
	getKeys() { return this.#keys }

	get keys(){return this.#keys}
}

module.exports = KeyQueryResponse;