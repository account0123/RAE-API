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
     *
     * This function overrides the normal getter with some special processing
     * to handle unusual multi-error message values in certain responses.
     *
     * @return {string|null} A message string if one exists, otherwise NULL.
     */
    getMessage(){
        // Instagram's API usually returns a simple error string. But in some
        // cases, they instead return a subarray of individual errors, in case
        // of APIs that can return multiple errors at once.
        //
        // Uncomment this if you want to test multiple error handling:
        // json = '{"status":"fail","message":{"errors":["Select a valid choice. 0 is not one of the available choices."]}}';
        // json = '{"status":"fail","message":{"errors":["Select a valid choice. 0 is not one of the available choices.","Another error.","One more error."]}}';
        // data = JSON.parse(json);
        // Object.defineProperty(this, 'message', { value: data['message ']});

        const message = this.#message;
        if (message === null || typeof message === 'string') {
            // Single error string or nothing at all.
            return message;
        }else if (Array.isArray(message)) {
            // Multiple errors in an "errors" subarray.
            if (message.length === 1 && message['errors'] && Array.isArray(message['errors'])) {
                // Add "Multiple Errors" prefix if the response contains more than one.
                // But most of the time, there will only be one error in the array.
                let str = (message['errors'].length > 1 ? 'Multiple Errors: ' : '');
                str += message['errors'].join(' AND '); // Assumes all errors are strings.
                return str;
            } else {
                throw new Error('Unknown message object. Expected errors subarray but found something else. Please submit a ticket about needing an Instagram-API library update!');
            }
        } else {
            throw new Error('Unknown message type. Please submit a ticket about needing an Instagram-API library update!');
        }
	}
	getHttpResponse(){ return this.#httpResponse; }
	isHttpResponse(){ return this.#httpResponse !== null; }
}

module.exports = Response;