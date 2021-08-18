
const generateNumber = () => {
  const randomNumber = () => Math.round((Math.random() * 50) + 1)

  const numbers = Array.from( 
    { length: 10 }, 
    () => Math.pow(randomNumber(), 2)
  );
  
  const sum = numbers.reduce((acc, value) => acc + value, 0)
  
  if (sum >= 8000) {
    throw new Error();
  }
  return sum;
}

const divisionNumber = (sumNumbers) => {
  const division = [2, 3, 5, 10].map(number => sumNumbers / number);
  return division.reduce((acc, number) => acc + number, 0)
}


const promise = async () => {

  try  {
    const sumNumbers = await generateNumber();
    const division = await divisionNumber(sumNumbers);
    console.log(Math.round(division));
  } catch (error) {
    console.log("É mais de oito mil! Essa promise deve estar quebrada!");
  }
} 

promise();

