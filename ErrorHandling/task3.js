const axios = require('axios');

async function fetchTodo(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return response.data;
  } catch (error) {
    return 'Fetch failed';
  }
}

module.exports = fetchTodo;
