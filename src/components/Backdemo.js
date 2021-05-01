import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Backdemo.css";

const Backdemo = () => {
  return (
    <div className="backdemo">
      <Container>
        <Row xs={1} md={1} lg={2}>
          <Col>
            <div>
              <h1>Book a demo</h1>
              <p>
                Fill in your details below to instantly schedule a meeting with
                our team.
              </p>
              <img
                className="backdemo__image"
                src="https://labelbox.com/static/images/index/book-demo.png"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Company Email</Form.Label>
                  <Form.Text className="text-muted">
                    Please use your organizational email addresses.
                    Unfortunately, we do not accept free/disposable email
                    domains.
                  </Form.Text>
                  <br />
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" placeholder="company name" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Description of your use case</Form.Label>
                  <Form.Control type="text" placeholder="Description" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>
                    What is your expected data labeling volume?
                  </Form.Label>
                  <Form.Control as="select">
                    <option>please select</option>
                    <option>under 200 label per months</option>
                    <option>201-5000 label per months</option>
                    <option> over 5000 label per months</option>
                    <option>unsure</option>
                  </Form.Control>
                </Form.Group>

                <Form.Text className="text-muted">
                  By submitting the form above, you agree to our Terms of Use,
                  Privacy Notice, CCPA Notice and Cookie Notice detailed on our
                  website. We'll occasionally send you account related emails.
                </Form.Text>

                <br />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Backdemo;
