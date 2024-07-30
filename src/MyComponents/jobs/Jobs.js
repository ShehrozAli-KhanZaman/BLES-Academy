import "./Jobs.css";
import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";

export const Jobs = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container-medium">
      <div className="hero-banner">
        <div className="banner-content">
          <h1 className="job-banner-heading">
            The #1 Job Board for Teaching Jobs
          </h1>
          <p className="margin-t-16 color-deep-blue-sea-light-20">
            BLES ACADEMY is at the heart of the educational community and is the
            premier resource for discovering and connecting with teachers and
            learning opportunities worldwide.
          </p>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="job-details"
            aria-expanded={open}
          >
            Physics Teacher Required!
          </Button>
          <Collapse in={open}>
            <div id="job-details" className="mt-3">
              <h4>Skills Required:</h4>
              <ul>
                <li>In-depth knowledge of Physics</li>
                <li>Excellent teaching skills</li>
                <li>Ability to engage and motivate students</li>
                <li>Strong communication skills</li>
                <li>Experience with curriculum development</li>
              </ul>
              <h4>Contact:</h4>
              <p>Email: saghirahmad333@gmail.com</p>
              <p>Phone: +923008445790</p>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

//export default JobDetails;
