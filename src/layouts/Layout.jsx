import { useState, useEffect, useRef } from "react";
import SideBar from "../components/SideBar.jsx";
import "./styled.jsx";
import GlobalLayoutStyle from "./styled.jsx";
import { useLocation } from "react-router-dom";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const Layout = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const isAuthPage = ['/', '/register'].includes(location.pathname);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);
  return (
    <div className="app-layout">
      <GlobalLayoutStyle />
      <div className="app-body">
        {!isAuthPage && (
          <div>
            <button
              ref={toggleButtonRef}
              className={`sidebar-toggle ${isSidebarOpen === true ? 'hidden' : 'sidebar-toggle'}`}
              onClick={toggleSidebar}
            >
              <MenuUnfoldOutlined />
            </button>

            <div ref={sidebarRef} className={`app-sidebar ${isSidebarOpen ? 'open' : ''}`}>
              <SideBar />
            </div>
          </div>
        )}

        <main className={`app-main ${isAuthPage ? 'login-page' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
