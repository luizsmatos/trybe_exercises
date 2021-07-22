// Parte 1 - Exercicio 1 / Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Parte 1 - Exercicio 2 / Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort(function(a, b) {
  return a - b;
});
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);


// Parte 2 - Exercicio 1 / Crie uma função que receba um número e retorne seu fatorial.

const n = (number) => {
  let fatorial = 1;
  for(let index = 2; index <= number; index += 1) {
    fatorial *= index;
  }
  return fatorial;
};

console.log(n(5));

const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(0));


// Parte 2 - Exercicio 2 / Crie uma função que receba uma frase e retorne qual a maior palavra.

function longestWord (string) {
  let splitPalavra = string.split(' ');
  let maiorTamanho = 0;
  let maiorPalavra = 0;

  for (let index = 0; index < splitPalavra.length; index += 1) {
    if (maiorTamanho < splitPalavra[index].length) {
      maiorTamanho = splitPalavra[index].length
      maiorPalavra = splitPalavra[index]
    }
  }
  return maiorPalavra;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

// Parte 3 - Exercicio 3 / Crie uma página que contenha:

