const assert = require('assert');
const books = require('./data');


// Adicione o código do exercício aqui:

const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  const year = new Date().getFullYear()
  // escreva seu código aqui
  return books
  .filter((book) => ( year - book.releaseYear) > 60)
  .sort((a, b) => a.releaseYear - b.releaseYear)
}

// console.log(oldBooksOrdered())

assert.deepStrictEqual(oldBooksOrdered(), expectedResult);