import React, { useEffect, useState } from "react";
import "../../styles/features/menu/menu.scss";
import { Link } from "react-router-dom";
import {
  countTodayTasks,
  countNext7DayTasks,
  countTask,
} from "../../store/task/taskStore";

const Menu = () => {
  const [counts, setCounts] = useState({
    today: 0,
    next7: 0,
    all: 0,
  });

  const refreshCounts = async () => {
    const [today, next7, all] = await Promise.all([
      countTodayTasks(),
      countNext7DayTasks(),
      countTask(),
    ]);
    setCounts({ today, next7, all });
  };

  useEffect(() => {
    refreshCounts();
    window.addEventListener("storage", refreshCounts);
    return () => window.removeEventListener("storage", refreshCounts);
  }, []);

  const menuItems = [
    { label: "To day", count: counts.today, link: "/home" },
    { label: "Next 7 days", count: counts.next7, link: "/task-form" },
    { label: "All tasks", count: counts.all, link: "/calendar" },
  ];

  return (
    <nav className="menu">
      <ul className="menu-list">
        {menuItems.map((item) => (
          <Link key={item.label} className="menu-item" to={item.link}>
            <span className="menu-label">{item.label}</span>
            <span className="menu-count">{item.count}</span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};


export default Menu;
