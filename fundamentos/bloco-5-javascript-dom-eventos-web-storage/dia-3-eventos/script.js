function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function createDaysList () {
const listDays = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const createListDays = document.createElement('li');
        
  if (days === 24 || days === 31) {
    createListDays.classList.add('day','holiday');
    createListDays.innerHTML = days;
    listDays.appendChild(createListDays);
  } else if (days === 4 || days === 11 || days === 18) {
    createListDays.classList.add('day','friday');
    createListDays.innerHTML = days;
    listDays.appendChild(createListDays);
  } else if (days === 25) {
    createListDays.classList.add('day','friday', 'holiday');
    createListDays.innerHTML = days;
    listDays.appendChild(createListDays);
  } else {
    createListDays.classList.add('day');
    createListDays.innerHTML = days;
    listDays.appendChild(createListDays);
    }
  }
};

createDaysList();

// Exercício 2:

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function newButtonHoliday(buttonName) {
const buttonContainer = document.querySelector('.buttons-container');
const newButton = document.createElement('button');
const newButtonId = 'btn-holiday';

newButton.innerHTML = buttonName;
newButton.id = newButtonId;
buttonContainer.appendChild(newButton);
}

newButtonHoliday('Feriados');

// Exercício 3:

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function changeColorButtonHoliday () {
  const holidayElement = document.getElementsByClassName('holiday');
  const buttonHoliday = document.querySelector('#btn-holiday');
  const setNewColor = 'rgb(190, 245, 174)';
  const backgroundColor = 'rgb(238,238,238)';

  buttonHoliday.addEventListener('click', function() {
  for (let index = 0; index < holidayElement.length; index += 1) {
    let daysHoliday = holidayElement[index];
      if (daysHoliday.style.backgroundColor === setNewColor) {
        daysHoliday.style.backgroundColor = backgroundColor;
      } else {
      daysHoliday.style.backgroundColor = setNewColor;
      }
    }
  })
}
changeColorButtonHoliday();

// Exercício 4:

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function newButtonFriday(buttonName) {
  const buttonContainer = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  const newButtonId = 'btn-friday';
  
  newButton.innerHTML = buttonName;
  newButton.id = newButtonId;
  buttonContainer.appendChild(newButton);
  }
  
  newButtonFriday('Sexta-feira');

// Exercício 5:

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function changeTextButtonFriday () {
  const fridayElement = document.getElementsByClassName('friday');
  const buttonFriday = document.querySelector('#btn-friday');
  const setNewText = 'SEXTOU!';
  const fridays = [4, 11, 18, 25];


  buttonFriday.addEventListener('click', function() {
  for (let index = 0; index < fridayElement.length; index += 1) {
    let daysFriday = fridayElement[index];
      if (daysFriday.innerHTML === setNewText) {
        daysFriday.innerHTML = fridays[index];
      } else {
      daysFriday.innerHTML = setNewText
      }
    }
  })
}
changeTextButtonFriday();

// Exercício 6:

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

const daysList = document.querySelectorAll('.day');

for (let index = 0; index < daysList.length; index += 1) {
  let days = daysList[index];
  days.addEventListener('mouseover', function (event){
    event.target.style.transition = 'transform .3s'
    event.target.style.transform = 'scale(1.5)';
  })

  days.addEventListener('mouseout', function(event){
    event.target.style.transform = 'unset';  
  })
}

// Exercício 7:

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function newTasks (task) {
  const divTasks = document.querySelector('.my-tasks')
  const createTask = document.createElement('span');
  divTasks.appendChild(createTask);

  createTask.innerHTML = task;
}

newTasks('Projeto');

// Exercício 8:

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function colorTask (color) {
  const divTasks = document.querySelector('.my-tasks')
  const createDivColor = document.createElement('div');
  divTasks.appendChild(createDivColor);
  divTasks.classList.add('task');

  createDivColor.style.backgroundColor = color;
}

colorTask('green');