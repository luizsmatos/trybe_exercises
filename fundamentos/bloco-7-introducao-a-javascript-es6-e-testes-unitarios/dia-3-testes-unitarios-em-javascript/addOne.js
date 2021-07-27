const assert = require('assert');
// escreva a função addOne aqui
// Escreva a função addOne para passar nos testes já implementados.

const myArray = [31, 57, 12, 5];

const addOne = (array) => {
  const output = [];
  for (let index = 0; index < array.length; index += 1) {
    output.push(array[index] + 1);
  }
  return output;
};

const output = addOne(myArray);
const expected = [32, 58, 13, 6];
const unchanged = [31, 57, 12, 5];


assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);