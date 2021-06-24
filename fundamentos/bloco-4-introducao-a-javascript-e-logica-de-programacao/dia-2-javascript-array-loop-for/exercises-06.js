let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersImpar = 0;

for (let index = 0; index < numbers.length; index += 1){
  if (numbers[index] % 2 !== 0){
    numbersImpar += 1;
  }
}

if (numbersImpar > 0){
  console.log("Existem: " + numbersImpar + " Impares")
}
else{
  console.log("nenhum valor ímpar encontrado")
}