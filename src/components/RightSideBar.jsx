import { Link } from "react-router-dom";
import "../styles/components/rightsidebar.scss";

const RightSideBar = () => {
  return (
    <nav className="right-sidebar">
      <div className="logo">
        <img src={'/logo.avif'} alt="Logo" width={40} height={40} />
      </div>
      <div className="right-sidebar-list">
        <div className="right-sidebar-item">
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </div>
        <div className="right-sidebar-item">
          <Link className="navbar-link" to="/about">
            About
          </Link>
        </div>
        <div className="right-sidebar-item">
          <Link className="navbar-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="right-sidebar-auth-list">
        <Link className="right-sidebar-link" to="/features/auth/login">
          Login
        </Link>
        <Link className="right-sidebar-link" to="/features/auth/register">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default RightSideBar;
