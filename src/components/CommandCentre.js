import React from "react";
import "./CommandCentre.css";
import Image from "../assests/svg/xyz.svg";
import Image2 from "../Images/command2.png";
import Image3 from "../assests/svg/command3.svg";
import Image4 from "../assests/svg/command4.svg";
import { Col, Container, Row } from "react-bootstrap";

const Section2 = () => {
  return (
    <div className="section2">
      <h1>The command centre for your data</h1>
      <p>
        Control data labeling and review with a centralized and configurable
        workflow. Connect datasets, collaborate across workforces, and create
        the ideal setup for your organization.
      </p>

      <Container>
        <Row>
          <Col>
            <img className="section2__image" src={Image} alt="" />
          </Col>
          <Col>
            <img className="section2__image" src={Image2} alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="section2__image" src={Image3} alt="" />
          </Col>
          <Col>
            <img
              className="section2__image"
              src="https://labelbox.com/static/images/index/coral.jpg"
              alt=""
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="section2__image" src={Image4} alt="" />
          </Col>
        </Row>
      </Container>

      {/* <div className="section2__image"></div> */}
    </div>
  );
};

export default Section2;
