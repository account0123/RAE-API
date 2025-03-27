import HttpInterface from "./HttpInterface";
import {IncomingMessage} from 'http';
declare module "rae-api" {
	export class RAE {
		http: HttpInterface;
		constructor(debug?: boolean, truncatedDebug?: boolean);
		/**
		 * @deprecated actual API does not provide this endpoint
		 */
		getWordOfTheDay(): Promise<WordOfTheDayResponse>;
		/**
		 * @deprecated actual API does not provide this endpoint
		 */
		keyQuery(query: string): Promise<KeyQueryResponse>;
		/**
		 * @deprecated actual API does not provide this endpoint
		 */
		searchWord(word: string): Promise<SearchWordResponse>;
		
		fetchWord(id: string): Promise<FetchWordResponse>;
		
		/**
		 * @deprecated actual API does not provide this endpoint
		 */
		getRandomWord(): Promise<RandomWordResponse>;
	}
	export class Response {
		STATUS_OK: 'ok';
		STATUS_FAIL: 'fail';
		constructor(httpResponse: IncomingMessage);
		isOk(): boolean;
		getMessage(): string | null;
		getHttpResponse(): IncomingMessage;
		isHttpResponse(): boolean;
	}
	export class Utils {
		static get_definitions(html: string): { definitions: [{type: string, definition: string}] };
	}
	export class WordOfTheDayResponse extends Response {
		readonly header: string
		readonly id: string
		constructor(response: {header: IncomingMessage, body: {header: string, id: string}});
		/** @deprecated use `if( header )`*/
		isHeader(): boolean;
		/** @deprecated use `if( id )`*/
		isId(): string;
		/** @deprecated use `header` */
		getHeader(): boolean;
		/** @deprecated use `id`*/
		getId(): string;
	}
	export class RandomWordResponse extends Response {
		readonly header: string
		readonly id: string
		readonly definitions: Definition[]
		constructor(response: {header: IncomingMessage, body: {header: string, id: string, definitions: {type: string, content: string}[]}});
		/** @deprecated use `if( header )`*/
		isHeader(): boolean;
		/** @deprecated use `if( id )` */
		isId(): boolean;
		
		areDefinitions(): boolean;
		/** @deprecated use `header` */
		getHeader(): string;
		/** @deprecated use `id` */
		getId(): string;
		/** @deprecated use `definitions` */
		getDefinitions(): Definition[];
	}
	export class KeyQueryResponse extends Response {
		readonly keys: string[]
		constructor(response: {header: IncomingMessage, body: string[]});

		areKeys(): boolean;
		/** @deprecated use `keys` */
		getKeys(): string[];
	}
	export class SearchWordResponse extends Response {
		readonly approx: number
		readonly results: Result[]
		constructor(response: {header: IncomingMessage, body: {approx: number, res: {grp: number, header: string, id: string}[]}});
		/** @deprecated use `approx`*/
		getApprox(): number;
		/** @deprecated use `results`*/
		getRes(): Result[];
	}
	export class AnagramResponse extends Response {
		readonly approx: number
		readonly results: AnagramResult[]
		constructor(response: {header: IncomingMessage, body: {approx: number, res: {word: string, header: string, id: string}}})
	}

	export class Result {
		readonly group: number
		readonly header: string
		readonly id: string
		constructor(res: {grp: number, header: string, id: string});
		/** @deprecated use `group` */
		getGrp(): number;
		/** @deprecated use `header` */
		getHeader(): string;
		/** @deprecated use `id` */
		getId(): string;
	}

	export class FetchWordResponse {
		word: string;
		articles: Article[];
		constructor(data: {word: string, articles: ArticleData[]});
	}

	export interface ArticleData {
		conjugations?: Conjugation[];
		origin?: Origin;
		senses: Sense[];
	}

	/**
	 * Artículo que contiene información de una palabra
	 */
	export class Article {
		/**
		 * @requires `this.sense.category == "verb"`
		 */
		conjugations?: VerbConjugation;
		origin?: Origin;
		senses: Sense[];
		constructor(response: ArticleData)
	}

	export interface IConjugation {
		mode: "indicative" | "non_personal" | "subjunctive" | "imperative";
	}

	export interface ImperativeTense extends IConjugation {
		mode: "imperative";
		singular_second_person: string;
		singular_formal_second_person: string;
		plural_second_person: string;
		plural_formal_second_person: string;
	}

	export interface IndicativeConjugation extends IConjugation {
		mode: "indicative";
		present: Tense;
		present_perfect: Tense;
		past_perfect: Tense;
		preterite: Tense;
		past_anterior: Tense;
		future: Tense;
		future_perfect: Tense;
		conditional: Tense;
		conditional_perfect: Tense;
	}

	export interface NonPersonalConjugation extends IConjugation {
		mode: "non_personal";
		infinitive: string;
		participle: string;
		gerund: string;
		compound_infinitive: string;
		compound_gerund: string;
	}

	export interface SubjunctiveConjugation extends IConjugation {
		mode: "subjunctive";
		present: Tense;
		present_perfect: Tense;
		imperfect: Tense;
		past_perfect: Tense;
		future: Tense;	
		future_perfect: Tense;
	}

	export interface Tense {
		singular_first_person: string;
		singular_second_person: string;
		singular_formal_second_person: string;
		singular_third_person: string;
		plural_first_person: string;
		plural_second_person: string;
		plural_formal_second_person: string;
		plural_third_person: string;
	}

	export interface VerbConjugation {
		non_personal: NonPersonalConjugation;
		indicative: IndicativeConjugation;
		subjunctive: SubjunctiveConjugation;
		imperative: ImperativeTense;
	}

	/**
	 * Raíz u origen de una palabra
	 */
	export interface Origin {
		raw: string;
		type: string;
		voice: string;
		text: string;
	}

	/**
	 * Significado de una palabra
	 */
	export interface Sense {
		raw: string;
		meaning_number: number;
		category: "adjective" | "noun" | "verb";
		usage: string;
		description: string;
		synonyms: string[] | null;
		antonyms: string[] | null;
	}

	export class Definition {
		readonly type: string
		readonly content: string
		constructor(definition: {type: string, content: string});
		/** @deprecated  use `if( type )`*/
		isType(): boolean;
		/** @deprecated use `if( content )` */
		isDefinition(): boolean;
		/** @deprecated use `type` */
		getType(): string;
		/** @deprecated use `content` */
		getDefinition(): string;
	}
	export class AnagramResult {
		readonly header: string
		readonly id: string
		readonly word: string
		constructor(res: {header: string, id: string, word: string})
	}
}
