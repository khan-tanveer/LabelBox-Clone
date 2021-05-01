import React from "react";
import "./Seeyourself.css";
import { Button } from "react-bootstrap";

const Seeyourself = () => {
  return (
    <div className="seeyourself">
      <img
        className="seeyourself__Image"
        src="https://labelbox.com/static/images/platform/bg/paraboloid-1.svg"
        alt=""
      />
      <div className="seeyourself__container">
        <h2>See It or yourself</h2>
        <Button className="seeyourself__button">Try it free</Button>
      </div>
    </div>
  );
};

export default Seeyourself;
