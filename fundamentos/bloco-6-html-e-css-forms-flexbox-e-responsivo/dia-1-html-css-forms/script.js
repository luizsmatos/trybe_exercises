const province = document.getElementById('province');
const date = document.getElementById('date')
const buttonSubmit = document.getElementById('submit');

// Creditos pelo Array, colega de turma @Michael

const provinces = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'] 

const initialsProvinces = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];




function createOptionProvince () {
  for (let indexProvince = 0; indexProvince < provinces.length; indexProvince += 1) {
    const newProvince = document.createElement('option');
    newProvince.innerText = provinces[indexProvince];
    newProvince.classList.add('province');
    newProvince.value = initialsProvinces[indexProvince];
    province.appendChild(newProvince);
  }
}
createOptionProvince ()

function checkDate () {
  const dateValueSplit = date.value.split('-')
  const splitYear = parseInt(dateValueSplit[0], 10)
  const splitMonth = parseInt(dateValueSplit[1], 10)
  const splitDay = parseInt(dateValueSplit[2], 10)

  if (splitDay < 0 || splitDay > 31) alert('Dia esta com formato errado!');
  if (splitMonth < 0 || splitMonth > 12) alert('Mes esta com formato errado!');
  if (splitYear < 0 || splitYear > 2021) alert('Ano esta com formato errado!')
}

checkDate()

function getUserValue (event) {
  event.preventDefault()
}

buttonSubmit.addEventListener('click', getUserValue);

const checks = {
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true
  },
  cpf: {
    maxLength: 11,
    required: true
  },
  address: {
    maxLength: 200,
    required: true
  },
  city: {
    maxLength: 28,
    required: true,
  },
  province: {
    type: 'select',
    required: true,
  },
  complement: {
    type: 'radio',
    required: true,
  },
  resume: {
    maxLength: 1000,
    required: true,
  },
  job: {
    maxLength: 40,
    required: true,
  },
  jobDisc: {
    maxLength: 500,
    required: true,
  },
  date: {
    type: 'date',
    required: true,
  }
}

function validationName () {
  const fullName = document.getElementById('full-name');
  const valueName = fullName.value

  if (valueName.length > checks.name.maxLength || valueName === '') {
    alert('')
  }

}