const uppercase = require('../src/uppercase.js')


describe('Uppercase', () => {

  it('Passar a string, e certificar a alteracao para Uppercase', (done) => {
    function callback(string) {
      try {
        expect(string).toBe('LUIZ')
        done();
      } catch (error) {
        done(error);
      }
    }
    uppercase('luiz', callback);
  });
})