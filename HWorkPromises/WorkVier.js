class TodoService {
  async fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
  }
}

class UserService {
  async fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json();
  }
}

const todoService = new TodoService();
const userService = new UserService();

async function run() {
  try {
    const todo = await todoService.fetchTodo();
    console.log("TODO через клас:", todo);

    const user = await userService.fetchUser();
    console.log("USER через клас:", user);
  } catch (error) {
    console.error("Помилка:", error);
  }
}

run();