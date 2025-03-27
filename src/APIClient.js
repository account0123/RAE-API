const { RAE_API_URL } = require('./Constants');
const https = require('https');

class APIClient {
    
    debug = false
	truncatedDebug = false

    constructor(mode) {
        if (mode) this.setDebugMode(mode);
    }

	setDebugMode(mode){
		switch(mode){
			case 0:
				this.truncatedDebug = false
				this.debug = false
				break
			case 1:
				this.truncatedDebug = true
				this.debug = false
				break
			case 2:
				this.truncatedDebug = false
				this.debug = true
		}
	}

    sendRequest(endpoint){
        const url = RAE_API_URL + endpoint;
        const headers = {
            "Content-Type": "application/json",
        };

        return new Promise((resolve, reject)=>{
            https.get(url, { headers }, (response) => {

                if (response.statusCode == 404) reject(`Error ${response.statusCode}. \nEl recurso ${url} no fue encontrado.`) 

                if(response.statusCode > 300) reject(`Error ${response.statusCode}.\nLa solicitud a ${url} fue respondida de forma inesperada.`);
                
                let responseBody = "";

                response.on('data', (chunk) => {
                    let data = chunk.toString().replace(/\n/g,'');
                    responseBody += data;
                });

                response.on('end', () => {
                    if(responseBody.length == 0){
                        reject('No hubo respuesta del servidor (id incorrecta?)');
                        return;
                    }
                    if(this.debug){
                        console.log('fetch: GET ' + RAE_API_URL + endpoint);
                        console.log('headers: ' + JSON.stringify(response.headers));
                        console.log('body: ' + responseBody);
                        console.log('Status Code: ' + response.statusCode);
                    }
                    if(!this.debug && this.truncatedDebug){
                        console.log('fetch: GET ' + RAE_API_URL + endpoint);
                        console.log('body: ' + responseBody);
                        console.log('Status Code: ' + response.statusCode);
                    }
                    const body = JSON.parse(responseBody);
                    resolve(body.data ? body.data : body);
                });
    
                }).on("error", (err) => {
                    console.log("Error: ", err.message);
                    reject(err);
                });
            });
        
    }
}

module.exports = APIClient;