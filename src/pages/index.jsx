// src/pages/Home.tsx
import React, { useMemo, useState, useEffect } from "react";
import authStore from "../store/auth/athStore";
import AddTask from "../components/AddTask";
import TaskDetailTabs from "../components/TaskDetailTabs";
import { getTasks, addTask } from "../queries/taskQueries";
import HomeWrapper from "./styled";

function getTodayTasks(tasks) {
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  return tasks
    .filter((task) => task.date === todayStr)
    .sort((a, b) => a.time.localeCompare(b.time));
}

const Home = () => {
  const [isActive, setIsActive] = useState(null);
  const auth = authStore.getAuth();
  const user = auth.user;
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTaskList(tasks);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (newTask) => {
    const added = await addTask(newTask);
    setTaskList((prev) => [...prev, added]);
  };

  const todayTasks = useMemo(() => getTodayTasks(taskList), [taskList]);

  const today = new Date();
  const dayOfWeek = today
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase();
  const day = today.getDate();
  const month = today.toLocaleDateString("en-US", { month: "long" });
  const timeOfDay =
    today.getHours() < 12
      ? "Morning"
      : today.getHours() < 18
      ? "Afternoon"
      : "Evening";

  return (
    <HomeWrapper>
      <div className="dashboard-root">
        <div className="dashboard-main">
          <h1 className="greeting">
            Good {timeOfDay},{" "}
            <span className="highlight">{user?.username}</span>
            <span className="dot">.</span>
          </h1>
          <div className="subtitle">Be so good no one can ignore you</div>
          <div className="day-card">
            <div className="day-date">
              <div className="day-date-main">
                {dayOfWeek}
                <br />
                <span className="big">{day}</span>
                <br />
                {month}
              </div>
            </div>
            <div className="day-info">
              <div className="meeting-title">
                Don’t let yesterday’s problems haunt you today. Wishing you a
                lucky new day!
              </div>
            </div>
          </div>
          <TaskDetailTabs
            tasks={todayTasks}
            setTaskList={setTaskList}
            AddTask={AddTask}
            today={today}
            showAddTask={true}
            onAdd={handleAddTask}
            setIsActive={setIsActive}
            isActive={isActive}
          />
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
