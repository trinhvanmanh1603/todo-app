import React, { useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "../styles/components/add-task.scss";
import SetTimePicker from "./SetTimePicker";

const AddTask = ({ day, onAdd, showDatePicker = false }) => {
  const [time, setTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs(day));

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;

    if (!time) {
      alert("Please select a time.");
      return;
    }

    const dateStr = selectedDate.format("YYYY-MM-DD");
    const newTask = {
      date: dateStr,
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
        {showDatePicker && (
          <DatePicker
            value={selectedDate}
            onChange={(value) => setSelectedDate(value)}
            format="YYYY-MM-DD"
            style={{ marginRight: "0.75rem" }}
          />
        )}
        <SetTimePicker value={time} onChange={setTime} />
        <input type="text" name="title" placeholder="Title" required />
      </div>
      <input type="text" name="content" placeholder="Content" required />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
