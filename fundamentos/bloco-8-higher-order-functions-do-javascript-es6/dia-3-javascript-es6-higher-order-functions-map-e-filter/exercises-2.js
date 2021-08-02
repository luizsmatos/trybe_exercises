const assert = require('assert');
const books = require('./data');


// Adicione o código do exercício aqui:

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  const name = books.map((nameAge) => 
  ({
    age: nameAge.releaseYear - nameAge.author.birthYear,
    author: nameAge.author.name,
  }))
  
  return name.sort((a, b) => a.age - b.age)
}

assert.deepStrictEqual(nameAndAge(), expectedResult);