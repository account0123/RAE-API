const RAE = require( "../src/RAE" );
const rae = new RAE();

(async function(){
  const random = await rae.getRandomWord();
  console.log(`Palabra aleatoria: ${ random.header }.`);
  console.log(`Id de la palabra: ${ random.id }`);
  console.log(`Definiciones:\n`);
  random.definitions.forEach(d => {
    console.log(`\t- (${ d.type }) ${ d.definitions }`);
  });
})();
