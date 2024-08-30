import { useLocation } from "react-router-dom";
import BlogsComp from "../../components/Blogs/BlogsComp";
import './BlogsDetails.css';

const BlogsDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;

  return (
    <div className="pt_20">
      <div className="h_300px overflow_hidden">
        <img
          src={image}
          alt={title}
          className="mx_auto h_300px w_full object_cover img_transition img_hover_scale"
        />
      </div>
      <div className="container">
        <p className="text_slate_600 text_sm py_3">
          written by {author} on {date}
        </p>
        <h1 className="text_2xl font_semibold">{title}</h1>
        <p>{description}</p>
      </div>

      {/* All Blogs Section */}
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
