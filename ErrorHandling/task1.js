const axios = require('axios');
async function getInvalidUrl() {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/invalid-endpoint');
  } catch (error) {
    return `Error: ${error.response.status} - ${error.response.statusText}`;
  }
}
module.exports = getInvalidUrl;
