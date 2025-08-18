const fetchWithHeadersAndParams = require('./task2');

test('запит містить кастомні хедери і параметри', async () => {
  const response = await fetchWithHeadersAndParams();

  expect(response.status).toBe(200); // Перевірка успішного статусу
  expect(Array.isArray(response.data)).toBe(true); // Перевірка що data — масив
  expect(response.config.headers['X-Custom-Header']).toBe('MyHeaderValue'); // Хедер
  expect(response.config.params).toEqual({ userId: 1 }); // Параметри
});
