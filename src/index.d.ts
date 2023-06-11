import HttpInterface from "./HttpInterface";
import {IncomingMessage} from 'http';
declare module "rae-api" {
	export class RAE {
		http: HttpInterface;
		constructor(debug?: boolean, truncatedDebug?: boolean);
		getWordOfTheDay(): Promise<WordOfTheDayResponse>;
		keyQuery(query: string): Promise<KeyQueryResponse>;
		searchWord(word: string): Promise<SearchWordResponse>;
		fetchWord(id: string): Promise<FetchWordResponse>;
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
		readonly definitions: Definition[]
		constructor(response: {header: IncomingMessage, body: {definitions: {type: string, content: string}[]}})
		areDefinitions(): boolean;
		/** @deprecated use `definitions`*/
		getDefinitions(): Definition[];
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
}
