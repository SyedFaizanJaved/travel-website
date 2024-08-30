/* eslint-disable react/prop-types */
import { IoLocationSharp } from "react-icons/io5";
import "./PlaceCard.css";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  handleOrderPopup,
}) => {
  return (
    <>
      <div
        className="place_card"
        onClick={handleOrderPopup}
      >
        <div className="place_card_image_container">
          <img
            src={img}
            alt="No image"
            className="place_card_image"
          />
        </div>

        <div className="place_card_content">
          <h1 className="place_card_title">{title}</h1>
          <div className="place_card_location">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="place_card_description">{description}</p>
          <div className="place_card_footer">
            <div className="place_card_type">
              <p>{type}</p>
            </div>
            <div className="place_card_price">
              <p className="place_card_price_text">${price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
