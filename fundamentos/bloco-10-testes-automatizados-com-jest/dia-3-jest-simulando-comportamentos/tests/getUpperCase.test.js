const funcs = require('../src/funcs')

describe('Quando chamar a funcao getUpperCase, deve receber uma string e retorná-la em caixa alta,', () => {

  it('mas agora ela deve retornar a string em caixa baixa, após, restaure a implementação original.', () => {
    const first = jest
      .spyOn(funcs, "getUpperCase")
      .mockImplementation((a) => a.toLowerCase());

    expect(funcs.getUpperCase('TRYBE!')).toBe('trybe!');
    expect(funcs.getUpperCase).toHaveBeenCalled();
    expect(funcs.getUpperCase).toHaveBeenCalledTimes(1)
    expect(funcs.getUpperCase).toHaveBeenCalledWith('TRYBE!');

    funcs.getUpperCase.mockRestore();

    expect(funcs.getUpperCase('trybe!')).toBe('TRYBE!');
  });
});