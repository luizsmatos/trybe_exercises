let notaProva = 101;

if (notaProva < 0 || notaProva > 100) {
  console.log("Erro, nota inexistente")
}
else if (notaProva >= 90) {
  console.log("A");
}
else if (notaProva >= 80) {
  console.log("B");
}
else if (notaProva >= 70) {
  console.log("C");
}
else if (notaProva >= 60) {
  console.log("D");
}
else if (notaProva >= 50) {
  console.log("E");
}
else {
  console.log("F");
}
