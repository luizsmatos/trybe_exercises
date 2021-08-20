
const messageError = (error) => console.log(error.message);

async function getDog() {
  const url = "https://dog.ceo/api/breeds/image/random"

  try {
    const fetch = await fetch(url);
    const response = await fetch.json();
    return response;
  } catch (error) {
    messageError(error)
  }
}

module.exports = getDog;