const Response = require('../Response');
const Definition = require('./Model/Definition');

class FetchWordResponse extends Response{

    /** @type {Definition[]} */
    #definitions = [];
    
    constructor(response){
        super(response.header);
        const body = response.body;
        for(const def of body.definitions) {
            this.#definitions.push(new Definition(def));
        }
    }

    areDefinitions(){ return this.#definitions.length > 0 }
    getDefinitions(){ return this.#definitions }
    
    get definitions(){ return this.#definitions }
}

module.exports = FetchWordResponse;