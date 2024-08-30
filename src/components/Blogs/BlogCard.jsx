/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ image, date, title, description, author }) => {
  return (
    <>
      <Link
        to={`/blogs/${title}`}
        onClick={() => {
          window.scrollTo(0, 0);
        
        }}
        state={{ image, date, title, description, author }}
      >
        <div className="blog_card">
          <div className="overflow_hidden">
            <img src={image} alt="No image" className="blog_image" />
          </div>
          <div className="blog_meta">
            <p>{date}</p>
            <p className="line_clamp_1">By {author}</p>
          </div>
          <div className="blog_content">
            <h1 className="line_clamp_1 blog_title">{title}</h1>
            <p className="line_clamp_2">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
