const { Article } = require('./Model/Article.js');

class FetchWordResponse {

    constructor(response){
        this.word = response.word;
        this.articles = response.meanings.map(article => new Article(article));
    }
}

module.exports = FetchWordResponse;