const math = require('../src/generateNumber')

describe('Quando chamar a funcao generateNumber', () => {

  it('Gera um numero', () => {
    math.generateNumber = jest.fn().mockReturnValue(10)

    expect(math.generateNumber()).toBe(10);
    expect(math.generateNumber).toHaveBeenCalled();
    expect(math.generateNumber).toHaveBeenCalledTimes(1)
  });
});