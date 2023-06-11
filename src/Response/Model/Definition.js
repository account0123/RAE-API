/**
 * Definición o acepción de una palabra
 */
class Definition{

	/** @type {string} */
	#definition;
	/** @type {string} */
	#type;

	constructor(definition){
		if (definition.type) this.#type = definition.type;
		if (definition.definition) this.#definition = definition.definition; 
	}

	isDefinition() { return !!this.#definition }
	isType(){ return !!this.#type }
	getType() { return this.#type }
	getDefinition(){ return this.#definition }

	get type(){return this.#type}
	get content(){return this.#definition}

}

module.exports = Definition;