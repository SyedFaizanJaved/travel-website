import TravelImg from "../../assets/travelbox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_inner">
        <div className="container">
          <div className="grid_container">
            {/* Image section */}
            <div data-aos="flip-up">
              <img
                src={TravelImg}
                alt="travel img"
                className="travel_img"
              />
            </div>
            {/* text content section */}
            <div className="text_content">
              <h1 data-aos="fade-up" className="headline">
                Explore all corners of the world with us
              </h1>
              <p
                data-aos="fade-up"
                className="description"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
                ratione ex alias quis magni at optio
                <br />
              </p>
              <div data-aos="zoom-in" className="icon_grid">
                <div className="icon_group">
                  <div className="icon_item">
                    <MdFlight className="icon_flight" />
                    <p>Flight</p>
                  </div>
                  <div className="icon_item">
                    <MdOutlineLocalHotel className="icon_hotel" />
                    <p>Hotel</p>
                  </div>
                </div>
                <div className="icon_group">
                  <div className="icon_item">
                    <IoIosWifi className="icon_wifi" />
                    <p>Wi-fi</p>
                  </div>
                  <div className="icon_item">
                    <IoFastFoodSharp className="icon_food" />
                    <p>Foods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
