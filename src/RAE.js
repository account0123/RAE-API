const HttpInterface = require('./HttpInterface');
const FetchWordResponse = require("./Response/FetchWordResponse");
const KeyQueryResponse = require("./Response/KeyQueryResponse");
const SearchWordResponse = require("./Response/SearchWordResponse");
const WordOfTheDayResponse = require('./Response/WordOfTheDayResponse');
class RAE{
    /**
     * HTTP interface.
     */
    http;

    /**
     * Constructor.
     *
     * @param {boolean} debug          Show API queries and responses.
     * @param {boolean} truncatedDebug Truncate long responses in debug.
     */
    constructor(debug = false, truncatedDebug = false){
        this.http = new HttpInterface();
        this.http.setDebug(debug);
        this.http.setTruncatedDebug(truncatedDebug);
    }

    /**
     * Obtiene la palabra del día.
     */
    async getWordOfTheDay(){
        const data = { 'callback': 'json' };
		const esc = encodeURIComponent;
		const querystring = Object.keys(data).map(k => esc(k) + '=' + esc(data[k])).join('&');
        return new WordOfTheDayResponse(await this.http.sendRequest('wotd?' + querystring));
    }

    /**
     * Muestra palabra/s con similitud a query.
     *
     * @param {string} query Palabra a consultar.
     */
    async keyQuery(query){
		const data = {'q': query, 'callback': 'jsonp123'};
		const esc = encodeURIComponent;
		const querystring = Object.keys(data).map(k => esc(k) + '=' + esc(data[k])).join('&');
        return new KeyQueryResponse(await this.http.sendRequest('keys?' + querystring));
    }

    /**
     * Busca una palabra.
     *
     * @param {string} word Palabra a buscar.
     */
    async searchWord(word){
		const data = {'w': word };
		const esc = encodeURIComponent;
		const querystring = Object.keys(data).map(k => esc(k) + '=' + esc(data[k])).join('&');
        return new SearchWordResponse(await this.http.sendRequest('search?' + querystring));
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
		const data = { 'id': id };
		const esc = encodeURIComponent;
		const querystring = Object.keys(data).map(k => esc(k) + '=' + esc(data[k])).join('&');
        return new FetchWordResponse(await this.http.sendRequest('fetch?' + querystring));
    }
}

module.exports = RAE;