const BASE_URL = "http://localhost:3001/lists";

export const listService = {
  async getAll() {
    const res = await fetch(BASE_URL);
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    return res.json();
  },

  async create(newList) {
    const res = await fetch(BASE_URL,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newList),
      }
    );
    return res.json();
  },

  async update(id, updatedList) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedList),
    });
    return res.json();
  },

  async delete(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    return res.ok;
  },
  
  async addTaskToList(listId, newTask) {
  try {
    const res = await fetch(`${BASE_URL}/${listId}`);
    const list = await res.json();

    const newTaskWithId = { id: Date.now(), ...newTask };
    const updatedItems = [...list.items, newTaskWithId];
    const updateRes = await fetch(`${BASE_URL}/${listId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: updatedItems }),
    });

    return await updateRes.json();
  } catch (error) {
    console.error("Failed to add task to list:", error);
    return null;
  }
}

};

