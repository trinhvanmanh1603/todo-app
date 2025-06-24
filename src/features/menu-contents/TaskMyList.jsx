import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/features/menu-content/task-my-list.scss";
import { getListDetail } from "../../queries/listQueries";
import AddTask from "../../components/AddTask";
import { addTaskToList } from "../../queries/listQueries";

const TaskMyList = () => {
  const { id } = useParams();
  const [selectedList, setSelectedList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchList = async () => {
      const data = await getListDetail(id);
      if (data) {
        setSelectedList(data);
      }
      setLoading(false);
    };
    fetchList();
  }, [id]);

  const handleCheck = (itemId) => {
    const updatedItems = selectedList.items.map((item) =>
      item.id === itemId ? { ...item, state: !item.state } : item
    );
    setSelectedList((prev) => ({ ...prev, items: updatedItems }));
  };

  const handleAddTask = async (newTask) => {
    const updatedList = await addTaskToList(id, newTask);
    if (updatedList) {
      setSelectedList(updatedList);
    }
  };

  if (loading) return <div>Đang tải...</div>;
  if (!selectedList) return <div>Không tìm thấy danh sách</div>;

  return (
    <div className="task-my-list">
      <h2 className="my-list-title">{selectedList.title}</h2>
      <h3 className="my-list-description">{selectedList.description}</h3>
      <nav className="task-list">
        {selectedList.items.map((item) => (
          <div key={item.id} className="list-item-content">
            <input
              type="checkbox"
              checked={item.state}
              onChange={() => handleCheck(item.id)}
              style={{ width: 20, height: 20 }}
            />
            <div className="list-item-info">
              <div className="list-time">
                <span className="date">{item.date}</span> -{" "}
                <span className="time">{item.time}</span>
              </div>
              <div className="list-title">{item.title}</div>
              <span className="list-content">Detail: {item.content}</span>
            </div>
          </div>
        ))}
      </nav>

      <AddTask onAdd={handleAddTask} showDatePicker={true} />
    </div>
  );
};

export default TaskMyList;
