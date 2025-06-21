const BASE_URL = 'http://localhost:3001/tasks';

export const getTasks = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

export const addTask = async (task) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return await res.json();
};

export const removeTask = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
};

export const updateTask = async (id, updatedTask) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTask),
  });
  return await res.json();
};
