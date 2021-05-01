import React from "react";
import Image from "../assests/svg/image.svg";
import "./Perceptually.css";

const Perceptually = () => {
  return (
    <div className="perceptually">
      <h1>Perpetually better</h1>
      <p>
        Training data improves your model — and your model can improve your
        training data.
      </p>
      <p>
        Labelbox accelerates iteration cycles between model training and data
        labeling.
      </p>
      <img className="preceptually__image" src={Image} alt="blue" />
    </div>
  );
};

export default Perceptually;
