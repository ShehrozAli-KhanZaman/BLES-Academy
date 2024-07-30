import React from "react";
import { blogData } from "./blogData";
import "./Blogs.css";
import { Link } from "react-router-dom";

export const Blogs = () => {
  const [firstBlog, ...remainingBlogs] = blogData;

  return (
    <div className="blogs-container">
      {/* Display the first blog */}
      <div className="first-blog-item">
        <img
          src={firstBlog.image || "path/to/default/logo.png"}
          alt={firstBlog.title}
          className="blog-image"
        />
        <div className="blog-content">
          <Link to={`/blogs/${firstBlog.id}`}>
            <h2 className="blog-title">{firstBlog.title}</h2>
            <p className="blog-summary">{firstBlog.summary}</p>
          </Link>
        </div>
      </div>

      {/* Display remaining blogs in rows of two */}
      {remainingBlogs.length > 0 && (
        <div className="blog-row">
          {remainingBlogs.map((blog) => (
            <div key={blog.id} className="blog-item image-top">
              <Link to={`/blogs/${blog.id}`}>
                <img
                  src={blog.image || "path/to/default/logo.png"}
                  alt={blog.title}
                  className="blog-image"
                />
                <div className="blog-content">
                  <h2 className="blog-title">{blog.title}</h2>
                  <p className="blog-summary">{blog.summary}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
