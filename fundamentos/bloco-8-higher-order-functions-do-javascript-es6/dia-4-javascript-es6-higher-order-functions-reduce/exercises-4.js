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
  let nameOfBook = '';
  const lengthBooks = books.reduce((acc, value) => {
    if(acc < value.name.length) {
      acc = value.name.length;
      nameOfBook = value;
    }
    return acc;
  
  }, 0)

  return nameOfBook;
}

// console.log(longestNamedBook())

assert.deepStrictEqual(longestNamedBook(), expectedResult);

