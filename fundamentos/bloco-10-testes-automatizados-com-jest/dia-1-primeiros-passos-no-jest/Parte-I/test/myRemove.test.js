const myRemove = require('../src/myRemove')


describe('myRemove', () => {
  test('Funcao existente', () => {
    expect(typeof myRemove).toEqual('function')
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });

  const myList = [10, 11, 12, 13];
  myRemove(myList, 11);

  test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(myList).toEqual([10, 11, 12, 13])
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });

});
