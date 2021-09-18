import { NavLink, withRouter } from "react-router-dom";

const items = [
  { to: "/", name: "Home", exact: true },
  { to: "/newComments", name: "AddComment" },
];
const Navigation = () => {
  return (
    <nav>
      <ul className="items">
        {items.map((nav, index) => (
          <li key={index}>
            <NavLink
              className="link"
              activeStyle={{ color: "blue", listStyle: "none" }}
              to={nav.to}
              exact={nav.exact || false}
            >
              {nav.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
