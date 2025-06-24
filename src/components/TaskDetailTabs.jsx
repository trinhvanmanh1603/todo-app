import React, { useState, useEffect } from "react";
import { Popconfirm, Input } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import SetTimePicker from "./SetTimePicker";
import { LikeOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import "../styles/components/task-detail-tabs.scss";
import { updateTask, removeTask } from "../queries/taskQueries";

const TaskDetailTabs = ({
  tasks = [],
  setTaskList = () => { },
  AddTask = null,
  today = null,
  showAddTask = false,
  onAdd = null,
  setIsActive = () => { },
  isActive = null,
}) => {
  const [taskList, setLocalTaskList] = useState(tasks);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState({});



  useEffect(() => {
    setLocalTaskList(tasks);
  }, [tasks]);

  const updateBothStates = (newList) => {
    setLocalTaskList(newList);
    setTaskList(newList);
  };

  const isPast = (date, time) => {
    const now = new Date();
    const taskDate = new Date(`${date}T${time}`);
    return taskDate < now;
  };

  const handleCheck = (id) => {
    const updated = taskList.map((task) =>
      task.id === id ? { ...task, state: !task.state } : task
    );
    updateBothStates(updated);
  };

  const handleAddTask = async (newTask) => {
    if (onAdd) {
      await onAdd(newTask);
    } else {
      const updated = [...taskList, newTask];
      updateBothStates(updated);
    }
  };

  const handleUpdateTask = async (id, updatedData) => {
    const updated = await updateTask(id, updatedData);
    const newList = taskList.map((task) =>
      task.id === id ? updated : task
    );
    updateBothStates(newList);
    setEditTaskId(null);
    setEditedTask({});
  };

  const handleDeleteTask = async (id) => {
    await removeTask(id);
    const updated = taskList.filter((task) => task.id !== id);
    updateBothStates(updated);
  };

  return (
    <>
      <div className="task-list">
        {taskList.map((task) => {
          const past = isPast(task.date, task.time);
          let cardClass = "task-card";
          if (past) {
            cardClass += task.state ? " task-done" : " task-overdue";
          }

          const isEditing = editTaskId === task.id;

          return (
            <div className={`${cardClass} home-task`} key={task.id}>
              <input
                type="checkbox"
                checked={!!task.state}
                disabled={!past}
                onChange={() => handleCheck(task.id)}
                style={{ width: 20, height: 20 }}
              />

              <div className="task-meta">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {isEditing ? (
                    <div className="task-edit">
                      <SetTimePicker
                        value={dayjs(editedTask.time, "HH:mm")}
                        onChange={(value) =>
                          setEditedTask((prev) => ({
                            ...prev,
                            time: value.format("HH:mm"),
                          }))
                        }
                        className="edit"
                      />

                      <Input
                        value={editedTask.title}
                        onChange={(e) =>
                          setEditedTask((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        placeholder="Tiêu đề"
                        style={{ width: "100%" }}
                        className="edit"
                      />
                    </div>
                  ) : (
                    `${task.time} - ${task.title}`
                  )}
                </div>

                <div className="task-title">
                  {isEditing ? (
                    <Input.TextArea
                      value={editedTask.content}
                      onChange={(e) =>
                        setEditedTask((prev) => ({
                          ...prev,
                          content: e.target.value,
                        }))
                      }
                      rows={2}
                      placeholder="Nội dung"
                      className="edit-area"
                    />
                  ) : (
                    task.content
                  )}
                </div>
              </div>

              <div className="task-actions">
                <Popconfirm
                  title="Bạn có chắc chắn muốn xóa công việc này?"
                  okText="Xóa"
                  cancelText="Hủy"
                  onConfirm={() => handleDeleteTask(task.id)}
                >
                  <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </Popconfirm>

                {isEditing ? (
                  <Popconfirm
                    title="Bạn có chắc chắn muốn cập nhật công việc này?"
                    okText="Lưu"
                    cancelText="Hủy"
                    onConfirm={() => handleUpdateTask(task.id, editedTask)}
                  >
                    <LikeOutlined />
                  </Popconfirm>
                ) : (
                  <EditOutlined
                    style={{ marginLeft: 8, cursor: "pointer" }}
                    onClick={() => {
                      setEditTaskId(task.id);
                      setEditedTask({ ...task });
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {showAddTask && AddTask && isActive === today && (
        <div className="add-task-bar">
          <AddTask day={today} onAdd={handleAddTask}  />
        </div>
      )}

      <div className="seven-day-add-task">
        <button className="plus" onClick={() => setIsActive(today)}>
          + Add Task
        </button>
      </div>
    </>
  );
};

export default TaskDetailTabs;
