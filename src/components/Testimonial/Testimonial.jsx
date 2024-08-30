import Slider from "react-slick";
import "./Testimonial.css"; // Import the CSS file

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div data-aos="fade-up" data-aos-duration="300" className="py_10">
      <div className="container">
        {/* Header section */}
        <div className="text_center mb_20 max_w_400 mx_auto">
          <p className="text_sm bg_clip_text text_transparent bg_gradient_to_r from_primary to_secondary">
            Testimonial
          </p>
          <h1 className="text_3xl font_bold">Testimonial</h1>
          <p className="text_xs text_gray_400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
            quam! Nulla?
          </p>
        </div>
        {/* testimonial section */}
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="grid grid_cols_1 max_w_800 mx_auto gap_6"
        >
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img }) => {
              return (
                <div key={id} className="my_6">
                  <div className="flex flex_col justify_center items_center gap_4 text_center shadow_lg p_4 mx_4 rounded_xl dark_bg_gray_800 bg_primary_10 relative">
                    <img
                      src={img}
                      alt=""
                      className="rounded_full block mx_auto"
                    />
                    <h1 className="text_xl font_bold">{name}</h1>
                    <p className="text_gray_500 text_sm">{text}</p>
                    <p className="text_black_20 text_9xl font_serif absolute top_0 right_0">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
