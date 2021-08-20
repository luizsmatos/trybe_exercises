const getAPI = require('../src/getApiDogs');

describe('Quando chamar a funcao getApiDogs', () => {

  getAPI.getDog = jest.fn();
  afterEach(getAPI.getDog.mockReset);

  it('caso a promisse seja resolvida.', async () => {
    getAPI.getDog.mockResolvedValue("request sucess");

    getAPI.getDog();
    expect(getAPI.getDog).toHaveBeenCalled();
    expect(getAPI.getDog).toHaveBeenCalledTimes(1);
    await expect(getAPI.getDog()).resolves.toBe("request sucess");
    expect(getAPI.getDog).toHaveBeenCalledTimes(2);
  });

  it("caso a promisse seja rejeitada.", async () => {
    getAPI.getDog.mockRejectedValue("request failed");

    expect(getAPI.getDog).toHaveBeenCalledTimes(0);
    await expect(getAPI.getDog()).rejects.toMatch("request failed");
    expect(getAPI.getDog).toHaveBeenCalledTimes(1);
  });
});