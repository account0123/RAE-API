const HttpInterface = require('./HttpInterface');
const FetchWordResponse = require("./Response/FetchWordResponse");
const KeyQueryResponse = require("./Response/KeyQueryResponse");
const RandomWordResponse = require('./Response/RandomWordResponse');
const SearchWordResponse = require("./Response/SearchWordResponse");
const WordOfTheDayResponse = require('./Response/WordOfTheDayResponse');
const AnagramResponse = require('./Response/AnagramResponse');
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
     * Obtiene las definiciones de una palabra por su ID. Para obtener el ID,
     * use searchWord().
     *
     * @see searchWord().
     * @param {string}  id
     *
     * @throws Error
     */
    async fetchWord(id){
        return new FetchWordResponse(await this.http.sendRequest('fetch?id=' + enc(id)))
    }

    async searchAnagram(word){
        return new AnagramResponse(await this.http.sendRequest('anagram?w=' + enc(word)))
    }
}

module.exports = RAE;
