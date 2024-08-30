/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import './Navbar.css'

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
];

const DropdownLinks = [
  {
    name: "sec1",
    link: "/#",
  },
  {
    name: "sec 2",
    link: "/#",
  },
  {
    name: "sec 3",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar_top">
          <div className="navbar_container">
            <div className="navbar_top_content">
              <p className="navbar_top_text">30% off on next booking</p>
              <p>Contact no. +123123123</p>
            </div>
          </div>
        </div>
        <div className="navbar_container">
          <div className="navbar_content">
            <div className="navbar_logo">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src="" alt="mycrev logo" className="navbar_logo_img" />
              </Link>
            </div>
            <div className="navbar_links">
              <ul className="navbar_links_list">
                {NavbarLinks.map((data) => (
                  <li key={data.name} className="navbar_link_item">
                    <NavLink to={data.link} className="navbar_link">
                      {data.name}
                    </NavLink>
                  </li>
                ))}
                <li className="navbar_dropdown">
                  <a href="/#home" className="navbar_dropdown_link">
                    Quick Links <FaCaretDown className="navbar_dropdown_icon" />
                  </a>
                  <div className="navbar_dropdown_menu">
                    <ul className="navbar_dropdown_list">
                      {DropdownLinks.map((data) => (
                        <li key={data.name} className="navbar_dropdown_item">
                          <a href={data.link} className="navbar_dropdown_link_item">
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="navbar_actions">
              <button className="navbar_button" onClick={handleOrderPopup}>
                Book Now
              </button>
              <div className="navbar_hamburger">
                {showMenu ? (
                  <HiMenuAlt1 onClick={toggleMenu} className="navbar_hamburger_icon" size={30} />
                ) : (
                  <HiMenuAlt3 onClick={toggleMenu} className="navbar_hamburger_icon" size={30} />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
