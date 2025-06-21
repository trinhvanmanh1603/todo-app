import "../../styles/features/menu/mylist.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLists } from "../../queries/listQueries";

const MyList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      const data = await getLists();
      setTasks(data);
    };
    fetchLists();
  }, []);

  return (
    <div className="my-list">
      <div className="my-list-header">
        <h2 className="my-list-title">My List</h2>
        <button className="new-task">+ New list</button>
      </div>
      <ul className="list">
        {tasks.map((task) => (
          <Link key={task.id} className="list-item" to={`/my-list/${task.id}`}>
            {task.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MyList;
