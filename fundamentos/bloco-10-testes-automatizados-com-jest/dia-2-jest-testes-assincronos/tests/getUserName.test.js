const getUserName = require('../src/getUserName');


describe('Testar funcao getUserName', () => {

  it('Testa se o usuario Mark existe!', () => {
    return getUserName(1).then((user) => {
      expect(user).toBe('Mark')
    })
  })

  it('Testa se o usuario Paul existe!', () => {
    return getUserName(2).then((user) => {
      expect(user).toBe('Paul')
    })
  })

  it('Testa se o usuario Paul existe!', () => {
    return getUserName(3).catch((error) => {
      expect.assertions(1);
      expect(error.message).toMatch('User with 3 not found.')
    })
  })
})