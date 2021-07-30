const assert = require('assert');

const books = require('./data');

// Adicione o código do exercício aqui:

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.find((nameAuthor) => nameAuthor.author.name.split(' ')
  .filter((word) => word.endsWith('.')).length === 3).name

}

console.log(authorWith3DotsOnName())

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);

