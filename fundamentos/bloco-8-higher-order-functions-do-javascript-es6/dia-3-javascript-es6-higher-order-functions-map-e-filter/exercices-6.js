const assert = require('assert');

const books = require('./data');


// Adicione o código do exercício aqui:

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  return books
  .filter((book) => ( 2021 - book.releaseYear) > 60)
  .map((nameBook) => nameBook.name) 
}


assert.deepStrictEqual(oldBooks(), expectedResult);

