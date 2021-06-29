

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

//   Exemplo de palíndromo: arara .
//   verificaPalindrome('arara') ;
//   Retorno esperado: true
//   verificaPalindrome('desenvolvimento') ;
//   Retorno esperado: false


// function verificaPalindrome(word){
//   for(index in word){
//     if(word[index] != word[(word.length - 1) - index]){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('desenvolvimento'));


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//  Array de teste: [2, 3, 6, 7, 10, 1]; .
//  Valor esperado no retorno da função: 4 .

// function indiceDoMaior(numeros) {
//   let indiceMaior = 0;
//   for (let indice in numeros) {
//     if (numeros[indiceMaior] < numeros[indice]) {
//       indiceMaior = indice;
//     }
//   }
//   return indiceMaior;
// }

// console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4


  
// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//  Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
//  Valor esperado no retorno da função: 6 .

// function indiceDoMenor(numeros){
//   let indiceMenor = 0;
//   for (let index in numeros){
//     if (numeros[index] < numeros[indiceMenor])
//     indiceMenor = index
//   }
//  return indiceMenor
// }

// console.log(indiceDoMenor([2, 4, 6, 7, 10, 3, 8]));



//  4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

//  Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//  Valor esperado no retorno da função: Fernanda .

// function array(word){
//   let maiorPalavra = word[0];
//     for (let index in word){
//       if (maiorPalavra.length < word[index].length){
//       maiorPalavra = word[index];
//       }
//     }
//   return maiorPalavra;
// }

// console.log(array(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

//  Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//  Valor esperado no retorno da função: 2 .

// function maiorRepeticao(numeros){
//   let quantRepetido = 0;
//   let quantNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros){
//     let verificaNumero = numeros[index];
//     for (let sIndex in numeros){
//     if (verificaNumero === numeros[sIndex]){
//     quantNumero += 1;
//       }
//     }
//     if (quantNumero > quantRepetido){
//       quantRepetido = quantNumero;
//       indexNumeroRepetido = index;
//     }
//     quantNumero = 0;
//   }
//   return numeros[indexNumeroRepetido];
// }

// console.log(maiorRepeticao([2, 3, 2, 5, 8, 2, 3]))

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

//  Valor de teste: N = 5.
//  Valor esperado no retorno da função: 1+2+3+4+5 = 15.


// function sumTotal(number){
//   let sum = 0;
//   for (let index = 0; index <= number; index += 1){
//     sum = sum + index;
//   }
//   return sum;
// }

// console.log(sumTotal(10));


// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

//  Valor de teste: 'trybe' e 'be'
//  Valor esperado no retorno da função: true
//  verificaFimPalavra('trybe', 'be') ;
//  Retorno esperado: true
//  verificaFimPalavra('joaofernando', 'fernan') ;
//  Retorno esperado: false




// function verificaFimPalavra(palavra, fimPalavra) {
//   palavra = palavra.split('');
//   fimPalavra = fimPalavra.split('');
//   controle = true;
//   for (let index = 0; index < fimPalavra.length; index += 1) {
//     if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
//       controle = false;
//     }
//   }
//   return controle;
// }

// verificaFimPalavra('trybe', 'be');