import WordOfTheDayResponse from "./Response/WordOfTheDayResponse";
import KeyQueryResponse from "./Response/KeyQueryResponse";
import SearchWordResponse from "./Response/SearchWordResponse";
import FetchWordResponse from "./Response/FetchWordResponse";
import HttpInterface from "./HttpInterface";
import {IncomingMessage} from 'http';
declare module "rae-api" {
	export class RAE {
		http: HttpInterface;
		constructor(debug: boolean, truncatedDebug: boolean);
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
}
