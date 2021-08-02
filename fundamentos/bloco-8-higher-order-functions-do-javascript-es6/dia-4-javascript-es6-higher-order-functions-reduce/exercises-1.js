const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {

  const reduce = arrays.reduce((acc, elemento,) => { 
    return acc.concat(elemento, [])
  })
  return reduce;
}


assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);