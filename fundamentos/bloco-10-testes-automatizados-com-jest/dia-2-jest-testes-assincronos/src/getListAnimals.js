const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) {
         resolve(animal);
      };

       reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
};

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.age === age);
      if (animal) {
         resolve(animal);
      };

       reject(new Error('Nenhum animal com essa idade!'));
    }, 100);
  })
};

const getAnimalName = async (name) => {
  const animal = await findAnimalByName(name);
  return animal;
};

const getAnimalAge = async (age) => {
  const animal = await findAnimalByAge(age);
  return animal;
};


module.exports = {
  getAnimalAge,
  getAnimalName,
};