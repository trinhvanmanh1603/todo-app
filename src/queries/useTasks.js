import { useEffect, useState } from "react";
import * as taskService from "../services/taskService";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService.getTasks().then(setTasks);
  }, []);

  const deleteTask = async (id) => {
    await taskService.removeTask(id);
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const addTask = async (newTask) => {
    const added = await taskService.addTask(newTask);
    setTasks(prev => [...prev, added]);
  };

  return { tasks, deleteTask, addTask };
};
