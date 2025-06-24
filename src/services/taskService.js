const BASE_URL = 'http://localhost:3001/tasks';

export const taskService = {
  async getTasks() {
    const res = await fetch(BASE_URL);
    return await res.json();
  },

  async addTask(task) {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    return await res.json();
  },

  async removeTask(id) {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    });
  },

  async updateTask(id, updatedTask) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });
    return await res.json();
  }
}