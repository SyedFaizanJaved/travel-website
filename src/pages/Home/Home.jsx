import React from "react";
import Hero from "../../components/Hero/Hero";
import NatureVid from "../../assets/video/main.mp4";
import BlogsComp from "../../components/Blogs/BlogsComp";
import Places from "../../components/Places/Places";
import Testimonial from "../../components/Testimonial/Testimonial";
import Banner from "../../components/Banner/Banner";
import BannerPic from "../../components/BannerPic/BannerPic";
import BannerImg from "../../assets/cover-women.jpg";
import Banner2 from "../../assets/travel-cover2.jpg";
import OrderPopup from "../../components/OrderPopup/OrderPopup";
import './Home.css';

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div>
        <div className="video_container">
          <video
            autoPlay
            loop
            muted
            className="video_element"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
