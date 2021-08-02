const books = require('./data');
const assert = require('assert');

const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  const lengthBooks = books.length;
  const sumAge = books.reduce((acc, value, index, array) => {
     const age =  acc +(value.releaseYear - value.author.birthYear)

     return age;
  }, 0);
  return sumAge / lengthBooks;
}

assert.strictEqual(averageAge(), expectedResult);