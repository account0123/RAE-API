const AnagramResult = require('./Model/AnagramResult');
const Response = require('../Response');
class AnagramResponse extends Response {
    /** @type {number} */
    #approx;
    /** @type {AnagramResult[]} */
    #res = [];
    constructor(response){
        super(response.header);
        const body = response.body;
        this.#approx = body.approx;
        for(const res of body.res){
            this.#res.push(new AnagramResult(res));
        }
    }
    get approx(){return this.#approx}
    get results(){return this.#res}
}

module.exports = AnagramResponse;