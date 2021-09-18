import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside>
      <nav>
        <ul className="items">
          <li>
            <NavLink className="link" activeStyle={{color:"red"}} to="/profile/dashboard">DashBoard</NavLink>
          </li>
          <li>
            <NavLink className="link" activeStyle={{color:"red"}} to="/profile/download">Download</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
