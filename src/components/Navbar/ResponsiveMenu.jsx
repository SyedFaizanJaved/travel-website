/* eslint-disable react/prop-types */
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";
import "./ResponsiveMenu.css";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`responsive_menu ${showMenu ? "responsive_menu_show" : "responsive_menu_hide"}`}
    >
      <div className="responsive_menu_card">
        <div className="responsive_menu_user_info">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="responsive_menu_user_status">Premium user</h1>
          </div>
        </div>
        <nav className="responsive_menu_nav">
          <ul className="responsive_menu_list">
            {NavbarLinks.map((data) => (
              <li key={data.name}>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="responsive_menu_link"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="responsive_menu_footer">
        <h1>
          Made with <span role="img" aria-label="love">❤️</span> by <a href="">Your Name</a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
