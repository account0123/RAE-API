const Response = require('../Response');
const Res = require('./Model/Res');
const {IncomingMessage} = require('http');

/**
 * SearchWordResponse.
 *
 * @method int getApprox()
 * @method Res[] getRes()
 */
class SearchWordResponse extends Response {
	#approx;
	#res = [];
	/**
	 * @param {IncomingMessage} response 
	 */
	constructor(response){
		super(response);
		const body = response.body;
		this.#approx = body.approx;
		for (const res of body.res) {
			this.#res.push(new Res(res));
		}
	}
	/**
	 * @returns {number}
	 */
	getApprox(){ return this.#approx; }

	/**
	 * @returns {Res[]} Resultados de la búsqueda.
	 */
	getRes(){ return this.#res; }

}

module.exports = SearchWordResponse;