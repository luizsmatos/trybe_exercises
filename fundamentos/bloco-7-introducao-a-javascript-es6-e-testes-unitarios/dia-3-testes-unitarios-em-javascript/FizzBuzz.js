const assert = require('assert');
const { type } = require('os');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(typeof myFizzBuzz, 'function'); 
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz'); // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(9), 'fizz') // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(25), 'buzz') // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(7), 7) // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz('7'), false) // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
