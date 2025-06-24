import { listService } from "../services/listService";

export const getLists = async () => {
  try {
    const data = await listService.getAll();
    return data;
  } catch (error) {
    console.error("Failed to fetch lists:", error);
    return [];
  }
};

export const getListDetail = async (id) => {
  try {
    const data = await listService.getById(id);
    return data;
  } catch (error) {
    console.error(`Failed to fetch list with id ${id}:`, error);
    return null;
  }
};

export const addList = async (listData) => {
  try {
    return await listService.create(listData);
  } catch (error) {
    console.error("Failed to add list:", error);
    return null;
  }
};

export const updateList = async (id, updatedData) => {
  try {
    return await listService.update(id, updatedData);
  } catch (error) {
    console.error("Failed to update list:", error);
    return null;
  }
};

export const deleteList = async (id) => {
  try {
    return await listService.delete(id);
  } catch (error) {
    console.error("Failed to delete list:", error);
    return false;
  }
};

export const addTaskToList = async (listId, newTask) => {
  return await listService.addTaskToList(listId, newTask);
}
