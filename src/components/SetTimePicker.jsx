import React from 'react';
import { TimePicker } from 'antd';

const SetTimePicker = ({ value, onChange }) => {
  return (
    <TimePicker
      name="time"
      format="HH:mm"
      value={value}
      onChange={onChange}
      allowClear={false}
      inputReadOnly
      style={{ width: 120 }}
    />
  );
};

export default SetTimePicker;
