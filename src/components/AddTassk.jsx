import React, { useState } from "react";
import "../styles/components/add-task.scss";
import SetTimePicker from "./SetTimePicker";

const AddTask = ({ day, onAdd }) => {
  const [time, setTime] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;

    if (!time) {
      alert("Please select a time.");
      return;
    }

    const today = new Date(day).toISOString().split("T")[0];
    const newTask = {
      date: today,
      time: time.format("HH:mm"),
      title,
      content,
      state: false,
    };

    onAdd(newTask);
    setTime(null);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <div className="add-task">
        <SetTimePicker value={time} onChange={setTime} />
        <input type="text" name="title" placeholder="Title" required />
      </div>
      <input type="text" name="content" placeholder="Content" required />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
