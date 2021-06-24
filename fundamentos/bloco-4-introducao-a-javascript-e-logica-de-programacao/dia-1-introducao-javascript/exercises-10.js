let valorCusto = 150;
let valorVenda = 300;

if (valorCusto >=0 && valorVenda >=0) {
  let valorCustoTotal = valorCusto * 1.2;
  let totalLucro = (valorVenda - valorCustoTotal) * 1000;
  console.log(totalLucro);
}
else {
  console.log("Erro, os valores estao incorretos")
}

