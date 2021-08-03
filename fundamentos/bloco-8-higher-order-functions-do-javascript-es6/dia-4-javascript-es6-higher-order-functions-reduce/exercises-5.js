const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
    const name =  names.reduce((acc, value) => {
    const splitName = value.toLowerCase().split('')
    
    const repeat = splitName.forEach((elemento) => {
      if (elemento === 'a') return acc += 1;
    })

    return acc;
  },0)

  return name;
}

assert.deepStrictEqual(containsA(), 20);



