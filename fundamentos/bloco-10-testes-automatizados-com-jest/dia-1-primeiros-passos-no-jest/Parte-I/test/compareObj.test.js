const {obj1, obj2, obj3} = require('../src/compareObj');

describe('compareObjeto', () => {
  test('Compare dois objetos para verificar se são idênticos ou não (Obj1 e Obje2)', () => {
    expect(obj1).toEqual(obj2)
  });

  test('Compare dois objetos para verificar se são idênticos ou não (Obj1 e Obje3)', () => {
    expect(obj1).not.toEqual(obj3)
  });

  test('Compare dois objetos para verificar se são idênticos ou não (Obj2 e Obje3)', () => {
    expect(obj2).not.toEqual(obj3)
  });
})
