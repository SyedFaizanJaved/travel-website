/* eslint-disable react/prop-types */
import { IoCloseOutline } from "react-icons/io5";
import './OrderPopup.css';

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="overlay">
          <div className="popup_container dark:bg-gray-900">
            {/* Header */}
            <div className="popup_header">
              <div>
                <h1 className="popup_title">Book Your Trip</h1>
              </div>
              <div>
                <IoCloseOutline
                  className="popup_close_icon"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="popup_body">
              <input
                type="text"
                placeholder="Name"
                className="popup_input dark:border-gray-500 dark:bg-gray-800"
              />
              <input
                type="email"
                placeholder="Email"
                className="popup_input dark:border-gray-500 dark:bg-gray-800"
              />
              <input
                type="text"
                placeholder="Address"
                className="popup_input dark:border-gray-500 dark:bg-gray-800"
              />
              <div className="popup_button_container">
                <button className="popup_button">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
