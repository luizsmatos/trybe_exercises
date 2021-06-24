let aliquotaINSS;
let aliquotaIR;

let valorSalario = 2000;


if (valorSalario <= 1556.94){
  aliquotaINSS = valorSalario * 0.08;
}
else if (valorSalario <= 2594.92){
  aliquotaINSS = valorSalario * 0.09;
}
else if (valorSalario <= 5189.82){
  aliquotaINSS = valorSalario * 0.11;
}
else if (valor >= 5189.82){
  aliquotaINSS = valorSalario - 570.88;
}

let valorLiquidoInss = valorSalario - aliquotaINSS;


if (valorLiquidoInss <= 1903.08){
  aliquotaIR = 0;
}
else if (valorLiquidoInss <= 2826.65){
  aliquotaIR = (valorLiquidoInss * 0.075) - 142.80;
}
else if (valorLiquidoInss <= 3751.05){
  aliquotaIR = (valorLiquidoInss * 0.15) - 354.80;
}
else if (valorLiquidoInss <= 4664.68){
  aliquotaIR = (valorLiquidoInss * 0.225) - 636.13;
}
else if (valorLiquidoInss >= 4664.69){
  aliquotaIR = (valorLiquidoInss * 0.275) - 869.36;
}


console.log("Salario:" + (valorLiquidoInss - aliquotaIR));



