import React from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import AvatarSection from "./AvatarSection";
import Footer from "./Footer";
import "./Section1.css";
import CommandCentre from "./CommandCentre";
import Seeyourself from "./Seeyourself";
import HowWorks from "./HowWorks";
import Backdemo from "./Backdemo";
import Perceptually from "./Perceptually";
import Video from "../videos/Video1.mp4";
import Automation from "./Automation";

const Section1 = () => {
  return (
    <div className="section1">
      {/* 1 first container section..................................................... */}
      <div className="section1__container">
        <Alert variant="primary">
          New! | Join us virtually on May 6th for LabelBox Academy: Learning the
          essentials. Register today!
        </Alert>
        <h1>Get to production AI faster</h1>
        <p>
          Save time by creating and managing your training data, people, and
          processes in a single place — so you can focus on building the next
          big thing.
        </p>
        <div>
          <Button className="mr-2" variant="light">
            Login
          </Button>
          <Button className="mr-4" variant="primary">
            Get Demo
          </Button>
        </div>
      </div>

      {/* video section ......................................................................... */}

      <div className="section1__video">
        <video loop autoPlay muted controls>
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      {/* companies section ....................................................................... */}
      <h2 className="atap_companies">
        Trusted by companies who are fueled by AI
      </h2>
      <div className="companies">
        <Container>
          <Row xs={2} md={3} lg={6}>
            <Col>
              <img
                className="section1__image"
                src="https://images.ctfassets.net/j20krz61k3rk/2YFxRxHUWE1ZJzmXtN3FDA/4eec3310f773573f3beeec8db03294a4/wb-dark.svg"
                alt=""
              />
            </Col>
            <Col>
              <img
                className="section1__image"
                src="https://images.ctfassets.net/j20krz61k3rk/12DX4U2L1P7X3r8w9vYgTJ/696404fb16449ddec61cc045dbfab93e/ArcelorMittal_1.svg"
                alt=""
              />
            </Col>
            <Col>
              <img
                className="section1__image"
                src="https://images.ctfassets.net/j20krz61k3rk/6p8KdnHVjlYiE8ugqeng3g/2675cf809644b8ca6cdc0e7017577f11/bayer-dark.svg"
                alt=""
              />
            </Col>
            <Col>
              <img
                className="section1__image"
                src="https://images.ctfassets.net/j20krz61k3rk/3KEoe7zjWhoombAFw5ZmhR/d5656dabef1794a3ca87dbc406bcff78/blue-river-dark.svg"
                alt=""
              />
            </Col>
            <Col>
              <img
                className="section1__image"
                src="https://images.ctfassets.net/j20krz61k3rk/4VuGdm03umYqDU18D2Bc47/30d99c4c1e1486078434f7e582e11803/lytx-dark.svg"
                alt=""
              />
            </Col>
            <Col>
              <img
                className="section1__image"
                src="https://images.ctfassets.net/j20krz61k3rk/5hRrDsMlgxKwQzizaAaHcs/ece65483d3f0cd72d5bb6536d25947c3/black-and-decker-dark.svg"
                alt=""
              />
            </Col>
          </Row>
          <br />

          <Row xs={2} md={3} lg={6}>
            <Col>
              {" "}
              <img
                className="section1__image"
                src="https://images.ctfassets.net/j20krz61k3rk/2SBQzAwQKZMmBhXh25j5Jj/337b3d3bb28c07fe906e1317ca3362f6/Bristol-Myers_Squibb_logo__2020__1.svg"
                alt=""
              />
            </Col>
            <Col>
              {" "}
              <img
                className="section1__image"
                src="https://images.ctfassets.net/j20krz61k3rk/2lXZNc0Hd6NIW6P1lYAG1M/92ec8dd4851910cf05cac824b63ab8c0/flir.svg"
                alt=""
              />
            </Col>
            <Col>
              {" "}
              <img
                className="section1__image"
                src="https://images.ctfassets.net/j20krz61k3rk/3RX4Zkbd2n4mZBOHQhWf9w/2850bc5186b5ceb1e15821ba3ca8fd45/stryker.svg"
                alt=""
              />
            </Col>
            <Col>
              {" "}
              <img
                className="section1__image"
                src="https://images.ctfassets.net/j20krz61k3rk/3Qo52PBd3Ps9xvMHok11Zw/539080991e573b962097af90adfac2cf/cape-analytics-dark.svg"
                alt=""
              />
            </Col>
            <Col>
              <img
                className="section1__image"
                src="https://images.ctfassets.net/j20krz61k3rk/w7OUj2xqMHPnprMMo5K8i/490cb1433e9d627c6d94e27740b202c5/arturo-dark.svg"
                alt=""
              />
            </Col>
            <Col>
              {" "}
              <img
                className="section1__image"
                src="https://images.ctfassets.net/j20krz61k3rk/3mNtRcm5gBzprzpSqW8mRr/3b00129dfd264b0de61467c042f3553a/caption-health-dark.svg"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* name and avatar section and paragraph........................................................................... */}

      <AvatarSection
        Image="https://images.ctfassets.net/j20krz61k3rk/3mANkItNXw3DrEUzMmOtse/c786f21c3902f21be1d2da156b5dce3e/1516963889309.jpeg"
        name="Andres Prieto-Moreno"
        title=" Director, Corporate Technology. Advanced Development Projects,
        FLIR Systems"
        paragraph="Labelbox facilitates the collaboration and management of multiple
        distributed labeling workforces, and the integration between our
        internal processes and the Labelbox platform is easy and works like
        a charm."
      />

      {/* perceptually better section............................................................ */}

      <Perceptually />

      {/* Automation................................................................................ */}

      <Automation />

      {/* secound avatar section................................................................ */}
      <AvatarSection
        Image="https://images.ctfassets.net/j20krz61k3rk/1f03tT3xZhR4tV0HKw73B3/f26a31dac9610c303bf42f6b9ce02364/1565214719745.jpg"
        name="Sheetanshu Pandey"
        title="Chief Technology Officer, Cape Analytics"
        paragraph="There are many labeling tools out there but the Labelbox backend is the real differentiator. With dynamic queueing, our labelers are never out of work, which was a major productivity and speed upgrade compared to our old internal tools."
      />

      {/* command centre for your data .................................................................... */}
      <CommandCentre />

      {/* how it works secction.................................................. */}

      <HowWorks />

      {/* Back to demo section................................................... */}

      <Backdemo />

      {/* seee yourself sectionn .................................................*/}

      <Seeyourself />

      {/* footer................................................................. */}
      <Footer />
    </div>
  );
};

export default Section1;
