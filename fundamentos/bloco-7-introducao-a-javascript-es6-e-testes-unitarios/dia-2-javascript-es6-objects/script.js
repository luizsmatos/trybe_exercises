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