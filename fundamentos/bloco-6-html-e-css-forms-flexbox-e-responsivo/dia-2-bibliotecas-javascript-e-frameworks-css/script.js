const province = document.getElementById("province");
const buttonSubmit = document.getElementById("submit");

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


function checkDate() {
  let startDate,
  endDate,
  updateStartDate = function() {
      startPicker.setStartRange(startDate);
      endPicker.setStartRange(startDate);
      endPicker.setMinDate(startDate);
  },
  updateEndDate = function() {
      startPicker.setEndRange(endDate);
      startPicker.setMaxDate(endDate);
      endPicker.setEndRange(endDate);
  },
  startPicker = new Pikaday({
      field: document.getElementById('start'),
      minDate: new Date(),
      maxDate: new Date(2020, 12, 31),
      onSelect: function() {
          startDate = this.getDate();
          updateStartDate();
      }
  }),
  endPicker = new Pikaday({
      field: document.getElementById('end'),
      minDate: new Date(),
      maxDate: new Date(2020, 12, 31),
      onSelect: function() {
          endDate = this.getDate();
          updateEndDate();
      }
  }),
  _startDate = startPicker.getDate(),
  _endDate = endPicker.getDate();

  if (_startDate) {
      startDate = _startDate;
      updateStartDate();
  }

  if (_endDate) {
      endDate = _endDate;
      updateEndDate();
  }
}
checkDate()
