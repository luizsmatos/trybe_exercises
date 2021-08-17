const myRemoveWithoutCopy = require('../src/myRomoveWIthoutCopy')


describe('myRemoveWithoutCopy', () => {
  test('Funcao existente', () => {
    expect(typeof myRemoveWithoutCopy).toEqual('function')
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });

  const myList = [10, 11, 12, 13];
  myRemoveWithoutCopy(myList, 11);

  test('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    expect(myList).toEqual([10, 12, 13])
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
})
