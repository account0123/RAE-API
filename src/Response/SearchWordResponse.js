const Response = require('../Response');
const Result = require('./Model/Result');

class SearchWordResponse extends Response {
	/** @type {number} */
	#approx;
	/** @type {Result[]} */
	#res = [];
	
	constructor(response){
		super(response.header);
		const body = response.body;
		this.#approx = body.approx;
		for (const res of body.res) {
			this.#res.push(new Result(res));
		}
	}

	getApprox(){ return this.#approx }
	getRes(){ return this.#res }

	get approx(){return this.#approx}
	get results(){return this.#res}
}

module.exports = SearchWordResponse;