import React from "react";
import "./Hero.css";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);

  return (
    <div className="bg_black_20 h_full">
      <div className="h_full flex_center p_4 bg_primary_10">
        <div className="container grid_1 gap_4">
          <div className="text_white">
            <p data-aos="fade-up" className="text_sm">
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font_bold text_3xl"
            >
              Search Your Destination
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space_y_4 bg_white rounded_md p_4 relative"
          >
            <div className="grid_1 sm_grid_3 gap_4 py_3">
              <div>
                <label htmlFor="destination" className="opacity_70">
                  Search your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="input_field"
                />
              </div>
              <div>
                <label htmlFor="date" className="opacity_70">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="input_field"
                />
              </div>
              <div>
                <label htmlFor="price" className="opacity_70 block">
                  <div className="flex_between">
                    <p>Max Price</p>
                    <p className="font_bold text_xl">$ {priceValue}</p>
                  </div>
                </label>
                <div className="range_container">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="range_input"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="search_button">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
