const {getAnimalName, getAnimalAge} = require('../src/getListAnimals')

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', async () => {
      expect.assertions(1);
      const animal = await getAnimalName('Dorminhoco');
      expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      try {
        await getAnimalName('Bob');
      } catch (error) {
        expect(error).toEqual(new Error('Nenhum animal com esse nome!'));
      }
    });
  });
});


describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', async () => {
      expect.assertions(1);
      const animal = await getAnimalAge(1);
      expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      try {
        await getAnimalAge(4);
      } catch (error) {
        expect(error).toEqual(new Error('Nenhum animal com essa idade!'));
      }
    });
  });
});