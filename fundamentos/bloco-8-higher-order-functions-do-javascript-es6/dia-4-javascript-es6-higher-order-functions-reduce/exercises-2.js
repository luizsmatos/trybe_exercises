const books = require('./data');
const assert = require('assert');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  const names = books.reduce((acc, currentvalue, index, array) => {
    let concat = acc;

    if (index === (array.length - 1) ) return concat += `${currentvalue.author.name}.`;
    concat += `${currentvalue.author.name}, `
    return concat
  }, '')

  return names;

};

assert.strictEqual(reduceNames(), expectedResult);