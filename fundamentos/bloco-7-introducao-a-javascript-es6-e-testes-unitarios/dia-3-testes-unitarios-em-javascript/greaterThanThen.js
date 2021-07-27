// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');

const greaterThanTen = (array) => {
  const results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = greaterThanTen([4, 10, 32, 9, 21]);
const result = [32, 21];

assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(parameter, result);