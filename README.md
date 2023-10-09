# RAE-API

RAE API I modified from <https://github.com/mgp25/RAE-API> to nodejs

See the [examples](https://github.com/account0123/RAE-API/tree/main/examples) folder for more information.

## Installation

```bash
npm install rae-api
```

## Usage

Importing rae class

```js
const { RAE } = require('rae-api');

const rae = new RAE();
```

Enabling debug mode

```js
const rae = new RAE(true); // prints https request
```

Getting Word Of The Day

```js
const wotd = await new RAE().getWordOfTheDay();

const word = wotd.getHeader();
console.log(`La palabra del día es: ${word}\n`);
```

Getting the definitions from a word search

```js
const rae = new RAE();
const search = await rae.searchWord('hola');
const wordId = search.getRes()[0].getId(); // gets 'hola' word id

const result = await rae.fetchWord(wordId); // fetches the word as object
const definitions = result.getDefinitions(); // gets all 'hola' definitions as Defintion[]
const first = definitions[0].getDefinition(); // gets the first 'hola' definition as string
```

Getting the definitions from a random word
```js
const random = await new RAE().getRandomWord(); //fetches a random word
const definitions = random.getDefinitions(); // gets all definitions of random word as Definition[]
const first = definitions[0].getDefinition(); // gets the first definition of random word as string
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
