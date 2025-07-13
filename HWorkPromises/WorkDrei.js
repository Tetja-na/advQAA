async function fetchTodoAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return response.json();
}

async function fetchUserAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return response.json();
}

async function run() {
  try {
    const todo = await fetchTodoAsync();
    console.log("TODO:", todo);

    const user = await fetchUserAsync();
    console.log("USER:", user);

    const all = await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
    console.log("Promise.all:", all);

    const first = await Promise.race([fetchTodoAsync(), fetchUserAsync()]);
    console.log("Promise.race:", first);
  } catch (error) {
    console.error("Помилка:", error);
  }
}

run();
