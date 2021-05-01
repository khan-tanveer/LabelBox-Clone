import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import footerImage from "../assests/svg/footerIcon.svg";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <img
          className="footer__iconImage"
          src="https://labelbox.com/static/images/favicon-v4-black.png"
          alt=""
        />
        <div className="footer__main">
          <Container className="mt-4">
            <Row xs={2} md={2} lg={4}>
              <Col sm>
                <div className="footer__links">
                  <h6>PLATFORM</h6>
                  <LinkContainer to="/product">
                    <span>Platform</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Automation</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Video</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Workforce</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Image Segmentation</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Image Classification</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Object Detection</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>For Enterprise</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Pricing</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Status</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Computer vision</span>
                  </LinkContainer>
                </div>
                <br />
              </Col>
              <Col sm>
                <div className="footer__links">
                  <h6>SOLUTION</h6>
                  <LinkContainer to="#">
                    <span>Insurance</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Medical</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Agriculture</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Manufacturing</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Consumer</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Transportation</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Drone & Arial</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>See all solutions</span>
                  </LinkContainer>
                </div>
                <br />
              </Col>
              <Col sm>
                <div className="footer__links">
                  <h6>LEARN</h6>
                  <LinkContainer to="#">
                    <span>Use Cases</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Docs</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Blog</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Customers Stories</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Build & Buy</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Release Notes</span>
                  </LinkContainer>
                </div>
                <br />
              </Col>
              <Col sm>
                <div className="footer__links">
                  <h6>COMPANY</h6>
                  <LinkContainer to="#">
                    <span>About</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Careers</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Remote Work</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Press & Media</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Privacy FAQ</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Privacy Notice</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Cookie Notice</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>CCPA Notice</span>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <span>Term of Use</span>
                  </LinkContainer>
                </div>
                <br />
              </Col>
            </Row>
          </Container>

          <div className="footer__lastSection">
            <p>&copy; labelbox, Inc</p>
            <p>We enable breakthroughs</p>
          </div>
        </div>
      </div>
      <img className="footer__image" src={footerImage} alt="" />
    </div>
  );
};

export default Footer;
