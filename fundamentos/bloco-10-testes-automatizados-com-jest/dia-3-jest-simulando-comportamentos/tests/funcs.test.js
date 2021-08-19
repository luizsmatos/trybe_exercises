const funcs = require('../src/funcs')

jest.mock('../src/funcs')


describe('Quando chamar a funcoes getUpperCase, getFirstLetter, concatenate', () => {

  it('getUpperCase deve receber uma string e retorná-la em caixa alta, mas agora ela deve retornar a string em caixa baixa.', () => {

    funcs.getUpperCase.mockImplementation((string) => string.toLowerCase())

    expect(funcs.getUpperCase('TRYBE!')).toBe('trybe!');
    expect(funcs.getUpperCase).toHaveBeenCalled();
    expect(funcs.getUpperCase).toHaveBeenCalledTimes(1)
  });

  it('getFirstLetter deve também receber uma string e retornar só a primeira letra, mas agora ela deve retornar a última letra de uma string.', () => {

    funcs.getFirstLetter.mockImplementation((string) => string.charAt(string.length - 1))

    expect(funcs.getFirstLetter('TRYBE')).toBe('E');
    expect(funcs.getFirstLetter).toHaveBeenCalled();
    expect(funcs.getFirstLetter).toHaveBeenCalledTimes(1)
  })

  it('concatenate deve receber duas strings e concatená-las, mas agora ela deve receber três strings e concatená-las.', () => {

    funcs.concatenate.mockImplementation((string1, string2, string3) => string1.concat(string2, string3))

    expect(funcs.concatenate('Eu', ' estudo na ','TRYBE!')).toBe('Eu estudo na TRYBE!');
    expect(funcs.concatenate).toHaveBeenCalled();
    expect(funcs.concatenate).toHaveBeenCalledTimes(1)
  })
});