const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.strictEqual(typeof myRemove, 'function', 'Funcao Inexistente!')
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Array diferente!')
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Array diferente!!')

const myList = [10, 11, 12, 13];
myRemove(myList, 11);
assert.deepStrictEqual(myList, [10, 11, 12, 13]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);