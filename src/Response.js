const {IncomingMessage} = require('http')
class Response {
	get STATUS_OK(){ return 'ok'; }
    get STATUS_FAIL(){ return 'fail'; }
    
    #httpResponse;
    #status;
    #message;
    /**
     * 
     * @param {IncomingMessage} httpResponse
     */
    constructor(httpResponse){
        this.#httpResponse = httpResponse;
        this.#message = httpResponse.statusMessage;
        if(httpResponse.statusCode < 300) this.#status = this.STATUS_OK;
        else this.#status = this.STATUS_FAIL;
    }
	/**
     * Checks if the response was successful.
     *
     * @return bool
     */
	isOk(){ return this.#status === this.STATUS_OK; }

	/**
     * Gets the message.
     * @return {string|null} A message string if one exists, otherwise NULL.
     */
    getMessage(){return this.#message}
	getHttpResponse(){ return this.#httpResponse; }
    /** @deprecated */
	isHttpResponse(){ return true }
}

module.exports = Response;