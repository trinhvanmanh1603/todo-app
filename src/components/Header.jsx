import { Link } from "react-router-dom";
import "../styles/components/header.scss";

const Header = () => {
  return (
    <header className="header">
        <Link style={{color: 'rgb(5, 120, 120)'}} to="/home">What are you going to do today?</Link>
        <Link style={{color: 'rgb(5, 120, 120)'}} to="/task-form">What are you going to do next?</Link>
        <Link style={{color: 'rgb(5, 120, 120)'}} to="/calendar">See all your work</Link>
    </header>
  );
};

export default Header;
