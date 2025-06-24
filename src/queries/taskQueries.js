import { taskService } from "../services/taskService";

export const getTasks = async () => {
  return await taskService.getTasks();
};

export const addTask = async (task) => {
  return await taskService.addTask(task);
};

export const removeTask = async (id) => {
  return await taskService.removeTask(id);
};

export const updateTask = async (id, updatedTask) => {
  return await taskService.updateTask(id, updatedTask);
};

export const getTasksByDate = async (date) => {
  const tasks = await taskService.getTasks();
  return tasks.filter(task => task.date === date);
};