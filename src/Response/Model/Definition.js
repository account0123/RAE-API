/**
 * Definition.
 *
 * @method string getDefinition()
 * @method string getType()
 * @method bool isDefinition()
 * @method bool isType()
 */
class Definition{

	#definition;
	#type;
	constructor(definition){
		if (definition.type) this.#type = definition.type;
		if (definition.definition) this.#definition = definition.definition; 
	}

	/** 
	 * @returns {boolean} Sí o no se encuentra la definción
	 */
	isDefinition() { return this.#definition; }

	/**
	 * @returns {string} Sí o no la definición es de algún tipo.
	 */
	isType(){ return this.#type; }

	/**
	 * @returns {string} El tipo de definición.
	 */
	getType() { return this.#type; }

	/**
	 * @returns {string} La definición.
	 */
	getDefinition(){ return this.#definition; }
}

module.exports = Definition;