import BlogsComp from "../../components/Blogs/BlogsComp";
import Location from "../../components/Location/Location";
import './About.css';

const About = () => {
  return (
    <>
      <div className="container">
        <div className="py-10">
          <h1 className="h1_my_8 h1_border_l_8 h1_border_primary_50 h1_py_2 h1_pl_2 h1_text_3xl h1_font_bold">
            About us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            ducimus cupiditate quo harum officia perspiciatis hic ut sunt
            repudiandae, laboriosam expedita nostrum tempora, consectetur
            itaque, voluptate error aperiam corrupti ullam aspernatur a!
            Dolorem, reprehenderit amet quidem deleniti iure rem vel a enim
            ipsam hic numquam consequatur eius id eaque accusamus repudiandae
            impedit, quisquam non, harum inventore ratione? Tempora voluptatum
            ut eligendi corrupti esse, repellat nesciunt illum facilis officiis?
            Nisi quidem officiis asperiores nostrum ipsa maiores explicabo quia!
            Corporis provident asperiores fuga eligendi rem temporibus possimus
            autem excepturi! Facilis sunt corrupti nesciunt asperiores, ab
            consectetur doloremque, velit a mollitia possimus quaerat!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            suscipit minus similique aliquam recusandae quisquam id nulla
            tempora voluptate vero.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
