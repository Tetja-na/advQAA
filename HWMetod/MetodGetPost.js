const axios = require('axios');

// Базовий URL API
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// 1. GET: Отримати пост з ID = 1
axios.get(`${BASE_URL}/posts/1`)
  .then((response) => {
    console.log('\nGET /posts/1');
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    if (response.status === 200 && response.data.id === 1) {
      console.log('Запит успішний');
    } else {
      console.log('Щось не так з відповіддю');
    }
  })
  .catch((error) => {
    console.error('Помилка GET /posts/1:', error.message);
  });

// 2. POST: Створити новий пост
axios.post(`${BASE_URL}/posts`, {
  title: 'Мій новий пост',
  body: 'Це тестовий пост',
  userId: 1
})
  .then((response) => {
    console.log('\nPOST /posts');
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    if (response.status === 201 && response.data.title === 'Мій новий пост') {
      console.log('Пост створено');
    } else {
      console.log('Щось не так із створенням посту');
    }
  })
  .catch((error) => {
    console.error('Помилка POST /posts:', error.message);
  });

// 3. GET: Отримати користувача з ID = 1
axios.get(`${BASE_URL}/users/1`)
  .then((response) => {
    console.log('\nGET /users/1');
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    if (response.status === 200 && response.data.id === 1) {
      console.log('Користувач знайдений');
    } else {
      console.log('Невірні дані користувача');
    }
  })
  .catch((error) => {
    console.error('Помилка GET /users/1:', error.message);
  });

// 4. GET: Отримати всі todos
axios.get(`${BASE_URL}/todos`)
  .then((response) => {
    console.log('\nGET /todos');
    console.log('Status:', response.status);
    console.log('First todo:', response.data[0]);
    if (response.status === 200 && Array.isArray(response.data)) {
      console.log('Масив todos отримано');
    } else {
      console.log('Дані не є масивом');
    }
  })
  .catch((error) => {
    console.error('Помилка GET /todos:', error.message);
  });

// 5. POST: Створити новий todo
axios.post(`${BASE_URL}/todos`, {
  userId: 1,
  title: 'Нова задача',
  completed: false
})
  .then((response) => {
    console.log('\nPOST /todos');
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    if (response.status === 201 && response.data.title === 'Нова задача') {
      console.log('Задача створена');
    } else {
      console.log('Щось не так із задачею');
    }
  })
  .catch((error) => {
    console.error('Помилка POST /todos:', error.message);
  });