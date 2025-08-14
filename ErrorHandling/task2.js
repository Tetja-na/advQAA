const axios = require('axios');

async function fetchWithHeadersAndParams() {
  return axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'X-Custom-Header': 'MyHeaderValue',
    },
    params: {
      userId: 1,
    },
  });
}

module.exports = fetchWithHeadersAndParams;
