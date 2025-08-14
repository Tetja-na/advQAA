const fetchTodo = require('./task3');

const axios = require('axios');
// Mock axios
jest.mock('axios');

describe('fetchTodo', () => {
  it('should return todo data when axios resolves', async () => {
    const mockData = { id: 1, title: 'Test Todo' };

    // Mock axios.get, dass es ein Promise zurückgibt mit mockData
    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchTodo(1);
    expect(result).toEqual(mockData);
  });

  it('should return "Fetch failed" when axios rejects', async () => {
    // Mock axios.get, dass es ein Promise ablehnt (Fehler)
    axios.get.mockRejectedValue(new Error('Network error'));

    const result = await fetchTodo(1);
    expect(result).toBe('Fetch failed');
  });
});
