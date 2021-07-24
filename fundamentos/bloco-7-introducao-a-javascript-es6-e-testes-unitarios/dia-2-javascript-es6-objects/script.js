const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
// 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
const who = order.order.delivery.deliveryPerson;
const forWhom = order.name;
const telephone = order.phoneNumber;
const address = Object.values(order.address);

const message = `Olá ${who}, entrega para: ${forWhom}, Telefone: ${telephone}, ${address[0]}, Nº: ${address[1]}, AP: ${address[2]}.`
return message
}

console.log(customerInfo(order));


// 2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."


const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newName = order.name = 'Luiz Silva';
  const discount = 10;
  const totalPrice = order.payment.total - discount;

  const message = `Olá ${newName},o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${totalPrice},00.`

  return message
}

console.log(orderModifier(order));



// PARTE 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


// 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const modifyTurn = (lesson, key, value) => {
  return lesson[key] = value;
}

modifyTurn(lesson2, 'Turno', 'Manha');
console.log(lesson2);

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keys = (lesson) => {
  console.log(Object.keys(lesson));
}

keys(lesson1);

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const keysValue = (lesson) => {
  const key = (Object.keys(lesson));
  console.log(key.length);
}

keysValue(lesson1);

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const value = (lesson) => Object.values(lesson);

console.log(value(lesson1))

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudent = (obj) => obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;

console.log(totalStudent(allLessons))

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValue = (obj,number) => Object.values(obj)[number];
console.log(getValue(lesson1, 2));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const keyAndValue = (obj, key, value) => {
  const objEntries = Object.entries(obj);
  let valor = false;

  for (let index in objEntries) {
    if (objEntries[index][0] === key && objEntries[index][1] === value) {
      valor = true;
    } 
  }
  return valor;
}

console.log(keyAndValue(lesson3, 'turno', 'noite'));