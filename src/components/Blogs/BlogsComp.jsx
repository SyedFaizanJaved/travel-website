import BlogCard from "./BlogCard";
import BlogsData from "./BlogsData";
import "./BlogsComp.css";

const BlogsComp = () => {
  return (
    <div className="blogs_container">
      <section className="blogs_section">
        <h1 className="blogs_title">Our Latest Blogs</h1>
        <div className="blogs_grid">
          {BlogsData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
