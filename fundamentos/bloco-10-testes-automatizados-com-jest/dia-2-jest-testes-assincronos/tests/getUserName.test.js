const getUserName = require('../src/getUserName');


describe('Testar funcao getUserName - promise', () => {

  it('Teste se o usuario Mark existe!', () => {
    return getUserName(1).then((user) => {
      expect(user).toBe('Mark')
    })
  })

  it('Teste se o usuario Paul existe!', () => {
    return getUserName(2).then((user) => {
      expect(user).toBe('Paul')
    })
  })

  it('Teste se a funcao lanca um erro, quando nao encontra o usuario!!', () => {
    return getUserName(3).catch((error) => {
      expect.assertions(1);
      expect(error.message).toMatch('User with 3 not found.')
    })
  })
})

describe('Testar funcao getUserName - async/await', () => {
  it('Teste se o usuario Mark existe!', async () => {
    const user = await getUserName(1);
    expect(user).toBe('Mark');
  })

  it('Teste se o usuario Paul existe!', async () => {
    const user = await getUserName(2);
    expect(user).toBe('Paul');
  })

  it('Teste se a funcao lanca um erro, quando nao encontra o usuario!!', async () => {
      expect.assertions(1);
      try {
        await getUserName(3)
      } catch (error) {
        expect(error.message).toMatch('User with 3 not found.')
      }
      
  })
})