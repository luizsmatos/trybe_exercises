const books = require('./data');
const assert = require('assert');


const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
  const lengthBooks = books.reduce((book, value) => {
    if(book.name.length < value.name.length) {
      return value;
    }
    return book;
  
  })
  return lengthBooks;
}


assert.deepStrictEqual(longestNamedBook(), expectedResult);

