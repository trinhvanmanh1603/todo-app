import { createGlobalStyle } from "styled-components";

const GlobalLayoutStyle = createGlobalStyle`
  .app-layout {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(to bottom right, white, #96d9f0);
    background-size: cover;
    background-position: center;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
  }
  .app-body {
    width: 100%;
    display: flex;
  }
  .app-main {
    width: 78vw;
    height: 96.5vh;
    position: absolute;
    right: 0;
    padding: 1.5vw;
    padding-left: 0;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    border-radius: 1vw;
    z-index: 0;
    @media (max-width: 1024px) {
      width: 100%;
      padding-left: 1.5vw;
    }
  }

  .app-header {
    padding: 1rem 0;
    padding-top: 0;
    position: sticky;
    top: 0;
    z-index: 3;
    
  }
  .app-sidebar {
    width: 22vw;
    position: absolute;
    left: 0;
    padding: 1.5vw;
    overflow: visible;
    scrollbar-width: none;
    -ms-overflow-style: none;
    border-radius: 1vw;
  }
  .sidebar-toggle {
    display: none
  }
  @media (max-width: 1024px) {
    .app-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 40%;
      background: white;
      z-index: 1000;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
    }

    @media (max-width: 468px) {
      .app-sidebar {
        width: 70%;
      }
    }

    .app-sidebar.open {
      transform: translateX(0);
    }

    .sidebar-toggle {
      position: fixed;
      top: 0.5rem;
      left: 0.5rem;
      padding: 0;
      color: #000000;
      z-index: 1100;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      background-color: transparent;
      outline: none;
      display: block;
    }
    .sidebar-toggle:focus,
    .sidebar-toggle:active {
      outline: none;
      box-shadow: none;
    }
    
    .hidden {
      display: none;
    }
  }
  .login-page {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom right, #f0f4f8, #96d9f0);
  }
`;

export default GlobalLayoutStyle;
