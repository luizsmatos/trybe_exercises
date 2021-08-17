const { test, expect } = require('@jest/globals');
const sum = require('../src/sum')


test('Funcao existente', () => {
    expect(typeof sum).toEqual('function')
})

test('Teste se o retorno de sum é 9', () => {
  expect(sum(4,5)).toBe(9)
})

test('Teste se o retorno de sum é 0', () => {
  expect(sum(0,0)).toBe(0)
})

test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
  expect(() => { sum(4,"5") }).toThrow()
})

test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
  expect(() => { sum(4,"5") }).toThrowError(new Error("parameters must be numbers"))
})
