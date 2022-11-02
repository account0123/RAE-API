const RAE = require( "../src/RAE" );
const rae = new RAE();

(async function(){
  const random = await rae.getRandomWord();
  console.log(`Palabra aleatoria: ${ random.getHeader() }.`);
  console.log(`Id de la palabra: ${ random.getId() }`);
  console.log(`Definiciones:\n`);
  random.getDefinitions().forEach(d => {
    console.log(`\t- (${ d.getType() }) ${ d.getDefinition() }`);
  });
})();
