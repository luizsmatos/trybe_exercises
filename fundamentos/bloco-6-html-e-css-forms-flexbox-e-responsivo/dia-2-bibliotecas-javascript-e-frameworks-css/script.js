const province = document.getElementById("province");
const buttonSubmit = document.getElementById("submit");
const form = document.querySelector('.js-form')
const formElements = document.forms[0].elements;
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
  format: "DD/MM/YYYY",
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
  format: "DD/MM/YYYY",
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


new window.JustValidate('.js-form', {
  rules: {
    firstname: {
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    lastname: {
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      minLength: 11,
      maxLength: 11,
    },    
    address: {
      required: true,
      minLength: 3,
      maxLength: 200,
    },
    city: {
      required: true,
      minLength: 3,
      maxLength: 28,
    },
    province: {
      type: 'selected',
      required: true,
    },
    house: {
      type: 'radio',
      required: true,
    },
    apartment: {
      type: 'radio',
      required: true,
    },
    cep: {
      required: true,
      cep: true,
    },
    resume: {
      required: true,
      maxLength: 1000,
      minLength: 150,
    },
    job: {
      required: true,
      maxLength: 40,
      minLength: 5,
    },
    discjob: {
      required: true,
      maxLength: 300,
      minLength: 5,
    },
    dateStart: {
      required: true,
    },
    dateEnd: {
      required: true,
    },
  },
});

// Costumizar as mensagens de required.

// new window.JustValidate('.js-form', {
//   messages: {
//     required: 'O campo é obrigatório.',
//     email: 'ols',
//     maxLength: 'The field must contain a maximum of :value characters',
//     minLength: 'The field must contain a minimum of :value characters',
//     password: 'Password is not valid',
//     remote: 'Email already exists'
//   },
// });





// Criacao das respostas em uma Div.

// buttonSubmit.addEventListener("click", (event) => {
//   // event.preventDefault();
//   const newDiv = document.getElementById("values");

//   for (let index = 0; index < form.length; index += 1) {
//     const inputsValue = formElements[index].value;
//     const inputsName = formElements[index].name;
//     let keyValue = `${inputsName} = ${inputsValue}`;
//     const newParagraph = document.createElement("p");
//     newParagraph.innerHTML = keyValue;
//     newDiv.appendChild(newParagraph);
//   }
// });

