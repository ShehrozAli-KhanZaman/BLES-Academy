// ErrorPage.js
import React from "react";
import "./ErrorPage.css";

export const ErrorPage = () => {
  return (
    <div id="error-page" className="error-container">
      <h1 className="error-title">Oops!</h1>
      <p className="error-title">Sorry, an unexpected error has occurred.</p>
      <p className="error-message">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};
