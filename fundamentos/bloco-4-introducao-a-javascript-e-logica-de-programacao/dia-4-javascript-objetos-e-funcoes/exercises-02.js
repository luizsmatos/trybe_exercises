

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

function array(word){
  let maiorPalavra = word[0];
    for (let index in word){
      if (maiorPalavra.length < word[index].length){
      maiorPalavra = word[index];
      }
    }
  return maiorPalavra;
}

console.log(array(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));