const getInvalidUrl = require('./task1');

test('обробка помилки при невірному запиті', async () => {
  const result = await getInvalidUrl();
  expect(result).toMatch(/Error: 404/); // Перевіряємо, що повертається помилка 404
});
