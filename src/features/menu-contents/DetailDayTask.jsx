import React, { useEffect, useState } from 'react';
import '../../styles/features/menu-content/detail-day-task.scss';
import { useParams } from 'react-router-dom';
import TaskDetailTabs from '../../components/TaskDetailTabs';
import AddTask from '../../components/AddTask';
import * as taskService from '../../services/taskService';

const DetailDayTask = () => {
  const { date } = useParams(); // yyyy-mm-dd
  const [taskList, setTaskList] = useState([]);
  const [isActive, setIsActive] = useState(null);

  // Gọi API khi component mount
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await taskService.getTasks();
      setTaskList(tasks);
    };
    fetchTasks();
  }, []);

  // Thêm task
  const handleAddTask = async (newTask) => {
    const added = await taskService.addTask(newTask);
    setTaskList((prev) => [...prev, added]);
  };

  // Lọc task theo ngày được truyền
  const tasks = taskList.filter((task) => task.date === date);

  return (
    <div className="detail-day-task">
      <h3 className="day-title">{date}</h3>

      {tasks.length > 0 ? (
        <TaskDetailTabs
          tasks={tasks}
          setTaskList={(newDayTasks) => {
            const otherTasks = taskList.filter((t) => t.date !== date);
            setTaskList([...otherTasks, ...newDayTasks]);
          }}
          AddTask={AddTask}
          today={date}
          showAddTask={true}
          onAdd={handleAddTask}
          setIsActive={setIsActive}
          isActive={isActive}
        />
      ) : (
        <>
          <p>Không có công việc nào cho ngày này.</p>
          <TaskDetailTabs
            tasks={[]}
            setTaskList={(newDayTasks) => {
              const otherTasks = taskList.filter((t) => t.date !== date);
              setTaskList([...otherTasks, ...newDayTasks]);
            }}
            AddTask={AddTask}
            today={date}
            showAddTask={true}
            onAdd={handleAddTask}
            setIsActive={setIsActive}
            isActive={isActive}
          />
        </>
      )}
    </div>
  );
};

export default DetailDayTask;
