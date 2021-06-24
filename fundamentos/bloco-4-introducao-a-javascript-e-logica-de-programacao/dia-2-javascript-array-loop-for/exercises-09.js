let number = [];


for ( index = 1; index <= 25; index += 1){
  number.push(index);
}

for (index = 0; index < number.length; index += 1){
  let divNumber = number[index] / 2;
  console.log(divNumber);
}

