import React from "react";
import "./Automation.css";
import automation from "../assests/svg/automation.svg";
import { Button } from "react-bootstrap";

const Automation = () => {
  return (
    <div className="automation">
      <img className="automation__image" src={automation} alt="" />

      <div className="automation__conatiner">
        <div className="automation__title">
          <h1>AUTOMATION</h1>
        </div>

        <div className="automation__content">
          <h4>Automated labeling reduces effort with every iteration</h4>
          <Button variant="primary">Learn More</Button>
        </div>

        <div className="automation__header">
          <h1>HUMAN EFFORT</h1>
        </div>
      </div>
    </div>
  );
};

export default Automation;
