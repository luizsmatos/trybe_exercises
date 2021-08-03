const assert = require('assert');

// escreva greet abaixo

const greet = (people = 'People', msg = 'Hi') => `${msg} ${people}` 


assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');