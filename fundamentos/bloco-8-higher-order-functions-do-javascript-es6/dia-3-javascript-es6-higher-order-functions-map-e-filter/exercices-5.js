const assert = require('assert');

const books = require('./data');


// Adicione o código do exercício aqui:

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors(genre1, genre2) {
  // escreva seu código aqui
  return books
  .filter((nameGenre) => nameGenre.genre === genre1 || nameGenre.genre === genre2)
  .map((nameAuthor) => nameAuthor.author.name).sort()
}

// console.log(fantasyOrScienceFictionAuthors('Ficção Científica', 'Fantasia'))

assert.deepStrictEqual(fantasyOrScienceFictionAuthors('Ficção Científica', 'Fantasia'), expectedResult);