const math = require('../src/generateNumber')

// jest.mock('../src/generateNumber')

describe('Quando chamar a funcao generateNumber', () => {

  it('gere um número aleatório entre 0 e 100', () => {
    math.generateNumber = jest.fn().mockReturnValue(10)

    expect(math.generateNumber()).toBe(10);
    expect(math.generateNumber).toHaveBeenCalled();
    expect(math.generateNumber).toHaveBeenCalledTimes(1)
  });

  it('uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo', () => {
    
    math.generateNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(math.generateNumber(10, 5)).toBe(2);
    expect(math.generateNumber).toHaveBeenCalled();
    expect(math.generateNumber).toHaveBeenCalledTimes(1);
    expect(math.generateNumber).toHaveBeenCalledWith(10, 5);
  })
});