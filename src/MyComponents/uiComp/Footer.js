import React from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

// Add the icons to the library
library.add(faFacebook, faTwitter, faInstagram, faTiktok);
export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          {/* First Row: Paragraphs */}
          <div className="col-md-6">
            <p className="text-light">
              At the heart of our vision is the belief that education should be
              a fundamental right for everyone, regardless of their
              circumstances. We are dedicated to offering high-quality, free
              educational resources to individuals across the globe. By breaking
              down barriers to education, we empower people to reach their full
              potential, fostering a world where knowledge is accessible to all.
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-light">
              We are driven by the mission to make education universally
              available. Our commitment lies in providing top-notch, free
              educational content that anyone can access. We believe that by
              equipping individuals with the knowledge they need, we can create
              a more equitable and informed society. Our efforts are focused on
              removing financial and geographical obstacles, ensuring that every
              person has the opportunity to learn and grow.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          {/* Second Row: Copyright and Social Icons */}
          <div className="col-md-6 d-flex align-items-center">
            <p className="mb-0 text-light">
              &copy; {new Date().getFullYear()} BLES ACADEMY
            </p>
            <div className="col-md-4 text-center">
              <Link to="/privacy-policy" className="text-light mx-2">
                {"  "}Privacy Policy
              </Link>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/BLESAcademyskillfullife"
                className="text-light mx-2"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
              </a>
              <a
                href="https://www.tiktok.com/@blesacademy"
                className="text-light mx-2"
              >
                <FontAwesomeIcon icon={["fab", "tiktok"]} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/sagheer.1/"
                className="text-light mx-2"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
