class AnagramResult {
    /** @type {string} */
    #header;
    /** @type {string} */
    #id;
    /** @type {string} */
    #word;
    constructor(res){
        this.#header = res.header;
        this.#id = res.id;
        this.#word = res.word;
    }

    get header(){return this.#header}
    get id(){return this.#id}
    get word(){return this.#word}
}

module.exports = AnagramResult