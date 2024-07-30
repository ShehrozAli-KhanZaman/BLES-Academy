// src/BlogComponents/Blog.js
import "./Blog.css";
import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "./blogData";
import logo from "../logo/ba.png"; // Import your logo

export const Blog = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id, 10));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div
      className="div1
    max-w-4xl
    bg-white
    rounded-lg
    min-h-screen
    flex flex-col
    justify-center
    mx-4
    md:mx-auto
    my-16
    sm:my-0"
    >
      <h1 className=" h1 font-georgia text-3xl md:text-5xl leading-normal">
        {blog.title}
      </h1>
      <img
        src={blog.image || logo} // Use the blog image or default to logo
        alt={blog.title}
        // style={{ width: 400, height: 400, objectFit: "cover" }}
        className="img"
      />
      <p>{blog.content}</p>
    </div>
  );
};
