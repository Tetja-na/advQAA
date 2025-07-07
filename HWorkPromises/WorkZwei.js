function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json());
}

function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json());
}

fetchTodo()
  .then(todo => console.log("TODO:", todo))
  .catch(error => console.error("Помилка TODO:", error));

fetchUser()
  .then(user => console.log("USER:", user))
  .catch(error => console.error("Помилка USER:", error));

Promise.all([fetchTodo(), fetchUser()])
  .then(data => console.log("Promise.all результат:", data));

Promise.race([fetchTodo(), fetchUser()])
  .then(data => console.log("Promise.race результат:", data));