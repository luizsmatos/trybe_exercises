const province = document.getElementById("province");
const buttonSubmit = document.getElementById("submit");
const form = document.forms[0].elements;
const inputCpf = document.getElementById("cpf-number");

// Creditos pelo Array, colega de turma @Michael

const provinces = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

const initialsProvinces = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

// Criacao dos estados.

function createOptionProvince() {
  for (
    let indexProvince = 0;
    indexProvince < provinces.length;
    indexProvince += 1
  ) {
    const newProvince = document.createElement("option");
    newProvince.innerText = provinces[indexProvince];
    newProvince.classList.add("province");
    newProvince.value = initialsProvinces[indexProvince];
    province.appendChild(newProvince);
  }
}
createOptionProvince();

// Formatacao Regex para o campo CPF.
// Referencia usada https://www.alura.com.br/artigos/formatando-cpf-com-ajuda-das-expressoes-regulares.

function formataCPF() {
  const cpfAtual = inputCpf.value;

  let cpfAtualizado;

  cpfAtualizado = cpfAtual.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4"
  );
  inputCpf.value = cpfAtualizado;
}
// Utilizacao do PLUGIN Pikaday
// Para costumizacao das datas de inicio e final.

let pickerStart = new Pikaday({
  field: document.getElementById("datepicker"),
  format: "DD/M/YYYY",
  minDate: new Date(1960, 0, 1),
  maxDate: new Date(),
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});

let pickerEnd = new Pikaday({
  field: document.getElementById("datepicker2"),
  format: "DD/M/YYYY",
  minDate: new Date(1960, 0, 1),
  maxDate: new Date(),
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});

// Personalize as regras de validação padrão.

new window.JustValidate(form, {
  Rules: {
    firstname: {
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    lastname: {
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    email: {
      required: true,
      email: true,
    },
    complement: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 300,
      minLength: 5,
    },
    zip: {
      required: true,
      zip: true,
    },
  },
});

// Costumizar as mensagens.

new window.JustValidate(form, {
  Messages: {
    required: "O campo é obrigatório",
    email: "Por favor, digite um email válido",
    maxLength: "O campo deve conter no máximo: caracteres de valor",
    minLength: "O campo deve conter no mínimo: caracteres de valor",
    password: "Senha não é válida",
    remote: "E-mail já existe",
  },
});

// Defina a cor de suas mensagens de erro:

new window.JustValidate(form, {
  colorWrong: "#B81111",
});

// Criacao das respostas em uma Div.

buttonSubmit.addEventListener("click", (event) => {
  // event.preventDefault();
  const newDiv = document.getElementById("values");

  for (let index = 0; index < form.length; index += 1) {
    const inputsValue = form[index].value;
    const inputsName = form[index].name;
    let keyValue = `${inputsName} = ${inputsValue}`;
    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = keyValue;
    newDiv.appendChild(newParagraph);
  }
});
