import React from "react";
import { Button } from "react-bootstrap";
import "./HowWork.css";

const HowWorks = () => {
  return (
    <div className="howwork">
      <h1>How it works </h1>
      <p>
        Labelbox is a training data platform built with three core layers that
        let you
      </p>
      <p>
        orchestrate the entire process from labeling and collaboration to
        iteration.
      </p>

      <Button variant="primary">Learn More</Button>
    </div>
  );
};

export default HowWorks;
