import React from "react";
import "./AvatarSection.css";

const AvatarSection = ({ Image, name, title, paragraph }) => {
  return (
    <div>
      <div className="section1__personIntro">
        <div className="section1__containeer">
          <div className="section1__avatarName">
            <img className="section1__avatarImage" src={Image} alt="" />
            <div className="secton1__writing">
              <h5>{name}</h5>
              <p>{title}</p>
            </div>
          </div>
          <p>"{paragraph}"</p>
        </div>
      </div>
    </div>
  );
};

export default AvatarSection;
