let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumTotal = 0;

for (let index = 0; index < numbers.length; index += 1){
  sumTotal += numbers[index]
}
let mediaNumbers = sumTotal / numbers.length;


if (mediaNumbers > 20) {
  console.log("Valor maior que 20!")
}
else {
  console.log("Valor menor ou igual a 20!")
}