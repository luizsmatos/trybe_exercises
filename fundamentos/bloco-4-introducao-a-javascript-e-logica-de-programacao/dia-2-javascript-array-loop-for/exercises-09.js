
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .


let number = [];


for (let index = 1; index <= 25; index += 1){
  number.push(index);
}

for (let index = 0; index < number.length; index += 1){
  let divNumber = number[index] / 2;
  console.log(divNumber);
}

