let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumTotal = 0;

for (let index = 0; index < numbers.length; index += 1){
  sumTotal += numbers[index]
}

console.log(sumTotal / numbers.length)