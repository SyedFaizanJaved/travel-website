/* eslint-disable react/prop-types */
import "./BannerPic.css";

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
  };
  return (
    <div data-aos="zoom-in" className="banner-pic" style={bgImage}></div>
  );
};

export default BannerPic;
