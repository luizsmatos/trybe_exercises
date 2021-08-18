const myFizzBuzz = require('../src/myFizzBuzz')

describe('myFizzBuzz', () => {
  test('Funcao existente', () => {
    expect(typeof myFizzBuzz).toEqual('function')
  });

  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz')
  });

  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toEqual('fizz')
  });

  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(25)).toEqual('buzz')
  });

  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(7)).toBe(7)
  });

  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('7')).toBeFalsy()
  });
});

