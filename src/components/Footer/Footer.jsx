import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";
import "./Footer.css";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <div className="footer_container">
      <video
        autoPlay
        loop
        muted
        className="footer_video"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="footer_content">
        <div className="footer_grid">
          <div className="footer_section">
            <h1 className="footer_title">
              <img src="" alt="" className="footer_logo" />
              Mycrev travel
            </h1>
            <p className="footer_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              facere ab hic accusamus omnis dolor voluptatibus illo, tempore
              eum tenetur.
            </p>
            <div className="footer_contact">
              <FaLocationArrow />
              <p>Alaska, USA</p>
            </div>
            <div className="footer_contact">
              <FaMobileAlt />
              <p>+123123123</p>
            </div>
            <div className="footer_social">
              <a href="#">
                <FaInstagram className="footer_icon" />
              </a>
              <a href="#">
                <FaFacebook className="footer_icon" />
              </a>
              <a href="#">
                <FaLinkedin className="footer_icon" />
              </a>
            </div>
          </div>
          <div className="footer_links_container">
            {FooterLinks.map((link, index) => (
              <div key={index} className="footer_links_section">
                <h1 className="footer_links_title">Important Links</h1>
                <ul className="footer_links_list">
                  <li className="footer_link_item">
                    <Link
                      to={link.link}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_text">
            &copy; 2024 All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
