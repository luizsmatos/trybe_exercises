const math = require('../src/generateNumber')


describe('Quando chamar a funcao generateNumber', () => {

  it('gere um número aleatório entre 0 e 100', () => {
    math.generateNumber = jest.fn().mockReturnValue(10)

    expect(math.generateNumber()).toBe(10);
    expect(math.generateNumber).toHaveBeenCalled();
    expect(math.generateNumber).toHaveBeenCalledTimes(1)
  });

  it('uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
    
    math.generateNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(math.generateNumber(10, 5)).toBe(2);
    expect(math.generateNumber).toHaveBeenCalled();
    expect(math.generateNumber).toHaveBeenCalledTimes(1);
    expect(math.generateNumber).toHaveBeenCalledWith(10, 5);
  })

  it('uma nova implementação que receba três parâmetros e retorne sua multiplicação, e depois, uma nova implementação que receba um parâmetro e retorne seu dobro', () => {
    
    math.generateNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(math.generateNumber(10, 5, 2)).toBe(100);
    expect(math.generateNumber).toHaveBeenCalled();
    expect(math.generateNumber).toHaveBeenCalledTimes(1);
    expect(math.generateNumber).toHaveBeenCalledWith(10, 5, 2);

    
    math.generateNumber.mockRestore();
    math.generateNumber = jest.fn().mockImplementation((a) => a * 2);
  
    expect(math.generateNumber(10)).toBe(20);
    expect(math.generateNumber).toHaveBeenCalled();
    expect(math.generateNumber).toHaveBeenCalledTimes(1);
    expect(math.generateNumber).toHaveBeenCalledWith(10);
  });
});