

let number = 5;

for (let index = 1; index <= number; index += 1) {
  let line = "";
  let asterisco = number - index;

  for (let sIndex = 0; sIndex < number; sIndex += 1) {
    if (line.length < asterisco) {
      line += " "
    } else {
      line += '*'
    }
  }
  
  console.log(line);
}
