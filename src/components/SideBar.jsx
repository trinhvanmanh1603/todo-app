import { Link } from "react-router-dom";
import "../styles/components/leftsidebar.scss"
import Account from "../features/auth"
import Menu from "../features/menu";
import MyList from "../features/menu/List";
import Tags from "../features/menu/Tags";
const SideBar = () => {
  return (
    <aside className="container">
      <Account {...Account} />
      <nav className="left-sidebar">
        <Menu />
        <MyList />
        <Tags />
      </nav>
    </aside>
  )
}

export default SideBar
