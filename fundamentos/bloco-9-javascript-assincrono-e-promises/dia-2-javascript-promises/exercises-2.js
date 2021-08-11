const generateNumber = () => {
  const randomNumber = Math.round((Math.random() * 50) + 1)
  return Math.pow(randomNumber, 2)
}

const promise = () => {
  const newPromise = new Promise((resolve, rejects) => {
    const numbers = Array.from( {length: 10}, generateNumber);
    const sumNumbers = numbers.reduce((acc, value) => acc + value, 0)
    (sumNumbers < 8000) ? resolve() : rejects()
  })
  newPromise
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'));
} 

promise();

