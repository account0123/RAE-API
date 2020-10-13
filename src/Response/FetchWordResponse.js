const Response = require('../Response');
const Definition = require('./Model/Definition');
const {IncomingMessage} = require('http');

/**
 * FetchWordResponse.
 */
class FetchWordResponse extends Response{
    #definitions = [];
    /**
     * 
     * @param {IncomingMessage} response 
     */
    constructor(response){
        super(response);
        const body = response.body;
        if(body.definitions){
            for (const def of body.definitions) {
                this.#definitions.push(new Definition(def));
            }
        }
    }

    /**
     * @returns {boolean} Sí o no hay definiciones.
     */
    areDefinitions(){ return this.#definitions ? true : false; }

    /**
     * @returns {Definition[]} Las definiciones de la palabra encontrada.
     */
    getDefinitions(){ return this.#definitions; }
}

module.exports = FetchWordResponse;