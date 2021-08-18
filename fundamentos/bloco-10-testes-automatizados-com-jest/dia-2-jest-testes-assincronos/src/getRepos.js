const fetch = require('node-fetch');

const getRepos = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.map((repo) => repo.name);
};

module.exports = getRepos;