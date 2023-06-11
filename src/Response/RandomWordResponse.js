const Response = require('../Response');
const Definition = require('./Model/Definition');
const {IncomingMessage} = require('http');

class RandomWordResponse extends Response{
	/** @type {Definition[]} */
	#definitions = [];
	/** @type {string} */
	#header;
	/** @type {string} */
	#id;
	
	constructor(response){
		super(response.header);
		const body = response.body;
		if (body.header) this.#header = body.header;
		if (body.id) this.#id = body.id;
		if (body.definitions){
			for (const def of body.definitions){
				this.#definitions.push(new Definition(def));
			}
		}
	}
	isHeader(){ return !!this.#header }
	isId(){ return !!this.#id }
	areDefinitions(){ return this.#definitions.length > 0 }
	getHeader(){ return this.#header }
	getId(){ return this.#id }
	getDefinitions(){ return this.#definitions }

	get id(){return this.#id}
	get header(){return this.#header}
	get definitions(){return this.#definitions}
}

module.exports = RandomWordResponse;
