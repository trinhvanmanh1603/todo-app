import React, { useState, useEffect } from "react";
import "../../styles/components/task-for-seven-day.scss";
import TaskDetailTabs from "../../components/TaskDetailTabs";
import AddTask from "../../components/AddTask";
import * as taskService from "../../services/taskService";

const getNext7Days = () => {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      date: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString("en-US", { weekday: "long" }),
      day: d.getDate(),
      month: d.toLocaleDateString("en-US", { month: "long" }),
    });
  }
  return days;
};

const TaskForSevenDay = () => {
  const days = getNext7Days();
  const [taskList, setTaskList] = useState([]);
  const [isActive, setIsActive] = useState(null);

  // Lấy toàn bộ task từ API
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await taskService.getTasks();
      setTaskList(tasks);
    };
    fetchTasks();
  }, []);

  // hàm thêm task mới
  const handleAddTask = async (newTask) => {
    const added = await taskService.addTask(newTask);
    setTaskList((prev) => [...prev, added]);
  };

  return (
    <div className="seven-day-board">
      {days.map((d) => {
        const dayTasks = taskList
          .filter((task) => task.date === d.date)
          .sort((a, b) => a.time.localeCompare(b.time));

        return (
          <div className="seven-day-column" key={d.date}>
            <div className="seven-day-header">
              <span className="main-label">{d.label}</span>
              <span className="sub-label">
                {d.day} {d.month}
              </span>
            </div>
            <div className="seven-day-tasks">
              <TaskDetailTabs
                tasks={dayTasks}
                setTaskList={(newDayTasks) => {
                  const others = taskList.filter((t) => t.date !== d.date);
                  setTaskList([...others, ...newDayTasks]);
                }}
                AddTask={AddTask}
                today={d.date}
                showAddTask={true}
                onAdd={handleAddTask}
                setIsActive={setIsActive}
                isActive={isActive}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskForSevenDay;
