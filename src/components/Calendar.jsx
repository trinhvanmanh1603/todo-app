import React, { useState } from "react";
import { Calendar } from "antd";
import { useNavigate } from 'react-router-dom';
import "../styles/components/calendar.scss";


const CalendarComponent = () => {
  const [, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (value) => {
    setSelectedDate(value);
    const formattedDate = value.format('YYYY-MM-DD');
    navigate(`/detail-day-task/${formattedDate}`);
  };

  return (
    <div className="calendar-container">
      <Calendar onSelect={handleSelect} className="calendar" />
    </div>
  );
};

export default CalendarComponent;
