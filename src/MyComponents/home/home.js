import React from "react";
import "./Home.css"; // Import the CSS file for styling
import books from "../logo/homeImgs/books.png";
import experts from "../logo/homeImgs/75ez.gif";
import booksR from "../logo/homeImgs/booksR.jfif";
import Engage from "../logo/homeImgs/7nvU.gif";
import comunity from "../logo/homeImgs/comunity.jfif";

const sections = [
  {
    image: experts,
    title: "Learn from Leading Experts in the Field",
    text: "Discover unparalleled educational experiences with top-notch educators from around the globe. At BLES Academy, we bring you the wisdom and knowledge of industry leaders to help you excel.",
    alt: "Educators",
  },
  {
    image: books,
    title: "Explore a Vast Array of Diverse Courses",
    text: "Whether you’re looking to master a new skill or deepen your understanding of a subject, our extensive catalog of courses has something for everyone. Choose from various disciplines and find the perfect course tailored to your interests.",
    alt: "Courses",
  },
  {
    image: Engage,
    title: "Engage with Interactive and Dynamic Learning",
    text: "Our interactive lessons and quizzes are designed to make learning both engaging and effective. With practical exercises and real-world applications, you’ll find yourself more involved in your educational journey than ever before.",
    alt: "Interactive Learning",
  },
  {
    image: comunity,
    title: "Become Part of a Thriving Learning Community",
    text: "Join a vibrant network of students and educators who are passionate about learning and teaching. Connect with like-minded individuals, share insights, and collaborate to achieve your educational goals together.",
    alt: "Community",
  },
  {
    image: booksR,
    title: "Access a Wealth of Educational Resources",
    text: "Benefit from a wide range of resources including study materials, expert advice, and academic support. BLES Academy is dedicated to providing you with the tools and assistance you need to succeed and reach your full potential.",
    alt: "Resources",
  },
];

export const Home = () => {
  return (
    <div className="home-container">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`home-row ${index % 2 === 0 ? "text-right" : "text-left"}`}
        >
          <div className="home-image-container">
            <img src={section.image} alt={section.alt} className="home-image" />
          </div>
          <div className="home-text-container">
            <h2 className="home-title">{section.title}</h2>
            <p className="home-text">{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
