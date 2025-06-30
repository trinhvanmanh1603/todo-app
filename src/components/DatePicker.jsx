import React, { useState } from 'react';
import { DatePicker } from 'antd';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const onChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  return (
    <div>
      <DatePicker onChange={onChange} needConfirm />
      {selectedDate && (
        <div style={{ marginTop: "1rem" }}>
          Ngày đã chọn: <b>{selectedDate}</b>
        </div>
      )}
    </div>
  );
};

export default DatePickerComponent;
