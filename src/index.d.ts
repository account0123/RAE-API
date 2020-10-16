import KeyQueryResponse from "./Response/KeyQueryResponse";
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
		static formatBytes(bytes: number, precision: number): string;
		static find_between(string: string, start: string, end: string): string;
		static get_definitions(html: string): { definitions: [{type: string, definition: string}] };
	}
	export class WordOfTheDayResponse extends Response {
		constructor(response: IncomingMessage & {body: {header: string, id: string}});
		isHeader(): boolean;
		isId(): string;
		getHeader(): boolean;
		getId(): string;
	}
	export class KeyQueryResponse extends Response {
		constructor(response: IncomingMessage & {body: string[]});
		areKeys(): boolean;
		getKeys(): string[];
	}
	export class SearchWordResponse extends Response {
		constructor(response: IncomingMessage & {body: {grp: number, header: string, id: string}});
		getApprox(): boolean;
		getRes(): Res[];
	}
	export class Res {
		constructor(res: {grp: number, header: string, id: string});
		getGrp(): number;
		getHeader(): string;
		getId(): string;
	}
	export class FetchWordResponse {
		constructor(response: IncomingMessage & {body: {definitions: {type?: string, definition?: string}[]}})
		areDefinitions(): boolean;
		getDefinitions(): Definition[];
	}
	export class Definition {
		constructor(definition: {type?: string, definition?: string});
		isType(): boolean;
		isDefinition(): boolean;
		getType(): string;
		getDefinition(): string;
	}
}
