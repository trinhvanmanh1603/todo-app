import { getTasks } from '../../queries/taskQueries';

const normalizeDate = (dateStr) => {
  const d = new Date(dateStr);
  d.setHours(0, 0, 0, 0);
  return d;
};

// Đếm số task hôm nay
export const countTodayTasks = async () => {
  const tasks = await getTasks();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return tasks.filter(
    (task) => normalizeDate(task.date).getTime() === today.getTime()
  ).length;
};

// Đếm số task 7 ngày tới (bao gồm hôm nay)
export const countNext7DayTasks = async () => {
  const tasks = await getTasks();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const next7Day = new Date(today);
  next7Day.setDate(today.getDate() + 7);

  return tasks.filter((task) => {
    const taskDate = normalizeDate(task.date);
    return taskDate >= today && taskDate <= next7Day;
  }).length;
};

// Tổng số task
export const countTask = async () => {
  const tasks = await getTasks();
  return tasks.length;
};
