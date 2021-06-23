let angleA = 100;
let angleB = 60;
let angleC = -20;
let somaAngles = angleA + angleB + angleC;

let allAnglesPositivo = angleA > 0 && angleB > 0 && angleC > 0;

if (allAnglesPositivo) {
  if (somaAngles === 180) {
    console.log("true");
  }
  else {
    console.log("false");
  }
  
}
else {
  console.log("Erro: angulo invalido")
}