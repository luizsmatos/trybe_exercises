        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */


function changeText() {
  let paragraphOne = document.getElementsByTagName("p")[0];
  paragraphOne.innerHTML = "Espero que esteja consolidado na area de desenvolvimente web, vivenciando varios desafios!";
}
changeText()

function changeColorGreen() {
  let bgColor = document.getElementsByClassName("main-content")[0];
    bgColor.style.backgroundColor = "rgb(76,164,109)";
}
changeColorGreen()

function changeColorWhite() {
  let bgColor = document.getElementsByClassName("center-content")[0];
    bgColor.style.backgroundColor = "white";
}
changeColorWhite()

function changeTitle() {
  let title = document.getElementsByClassName("title")[0];
  title.innerHTML = "Exercicio 5.1 - JavaScript"
}
changeTitle()

function upperCase(){
  let text = document.getElementsByTagName("p")[0];
  text.style.textTransform = "uppercase";
}
upperCase()

function viewParagraph() {
  let paragraph = document.getElementsByTagName("p");
  for (let index = 0; index < paragraph.length; index += 1)
  console.log(paragraph[index].innerHTML);
}
viewParagraph()