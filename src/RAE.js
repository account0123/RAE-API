const HttpInterface = require('./HttpInterface');
const FetchWordResponse = require("./Response/FetchWordResponse");
const KeyQueryResponse = require("./Response/KeyQueryResponse");
const RandomWordResponse = require('./Response/RandomWordResponse');
const SearchWordResponse = require("./Response/SearchWordResponse");
const WordOfTheDayResponse = require('./Response/WordOfTheDayResponse');
const AnagramResponse = require('./Response/AnagramResponse');
const Client = require('./APIClient.js');
const enc = encodeURIComponent;
class RAE{
    /**
     * HTTP interface.
     */
    http;

    /**
     * debugMode:
     * 
     * 0 - No debug
     * 
     * 1 - Show API queries and responses
     * 
     * 2 - Truncate long responses in debug
     */
    constructor(debugMode = 0){
        this.http = new HttpInterface();
        this.http.setDebugMode(debugMode);

        this.client = new Client(debugMode);
    }

    /**
     * Obtiene la palabra del día.
     */
    async getWordOfTheDay(){
        return new WordOfTheDayResponse(await this.http.sendRequest('wotd?callback=json'))
    }

    /**
     * Obtiene una palabra aleatoria del API de la RAE.
     */
    async getRandomWord(){
      return new RandomWordResponse(await this.http.sendRequest('random'))
    }

    /**
     * Muestra palabra/s con similitud a query.
     *
     * @param {string} query Palabra a consultar.
     */
    async keyQuery(query){
		const data = {'q': query, 'callback': 'jsonp123'};
		const querystring = Object.keys(data).map(k => enc(k) + '=' + enc(data[k])).join('&');
        return new KeyQueryResponse(await this.http.sendRequest('keys?' + querystring))
    }

    /**
     * Busca una palabra.
     *
     * @param {string} word Palabra a buscar.
     */
    async searchWord(word){
        return new SearchWordResponse(await this.http.sendRequest('search?w=' + enc(word)))
    }

    /**
     * Obtiene las definiciones de una palabra mediante busqueda exacta.
     * Si no se encuentra la palabra, devuelve un error 404.
     *
     * @param {string} word
     *
     * @throws Error
     */
    async fetchWord(word){
        return new FetchWordResponse(await this.client.sendRequest('/words/' + enc(word)))
    }

    async searchAnagram(word){
        return new AnagramResponse(await this.http.sendRequest('anagram?w=' + enc(word)))
    }
}

module.exports = RAE;
