import LeftSideBar from "../components/LeftSideBar";
import "../styles/layout.scss";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="app-layout">
      <div className="app-body">
        {!['/', '/register'].includes(location.pathname) && (
          <div className="app-sidebar">
            <LeftSideBar />
          </div>
        )}

        <main className={`app-main ${location.pathname === '/' || location.pathname === '/register' ? 'login-page' : ''} `}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;