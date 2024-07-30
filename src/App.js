import "./App.css";
import React from "react";
import { Home } from "./MyComponents/home/home";
import { Jobs } from "./MyComponents/jobs/Jobs";
import Header from "./MyComponents/uiComp/Header";
import { Footer } from "./MyComponents/uiComp/Footer";
import { Contact } from "./MyComponents/about/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivacyPolicy } from "./MyComponents/about/PrivacyPolicy";
import { Blogs } from "./MyComponents/blogs/Blogs";
import { Blog } from "./MyComponents/blogs/Blog";
import { ErrorPage } from "./MyComponents/errorPage/ErrorPage.js";

function App() {
  return (
    <>
      <Router>
        <Header title="BLES ACADEMY" searchBar={false} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
