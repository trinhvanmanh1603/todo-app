import SideBar from "../components/SideBar";
import "./styled.jsx"
import GlobalLayoutStyle from "./styled.jsx";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="app-layout">
      <GlobalLayoutStyle />
      <div className="app-body">
        {!['/', '/register'].includes(location.pathname) && (
          <div className="app-sidebar">
            <SideBar />
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