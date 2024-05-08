import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MyContext } from "../../MyContextProvider";
import { useContext } from "react";

const AddForm = () => {
    const {  setShowForm } = useContext(MyContext);


    const handlecloseClick = () => {
        setShowForm(false);
      };

  return (
    <Container>
      <h2 className="text-center">Fill Form</h2>
      <Row className="justify-content-center">
        <Col
          md={8}
          className="shadow p-3 mb-5 rounded"
          style={{ backgroundColor: "#f0f0f0" }}
        >
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="text" placeholder="Enter age" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter address" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formMobileNo">
                  <Form.Label>Mobile No.</Form.Label>
                  <Form.Control type="text" placeholder="Enter mobile number" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center mt-3">
              <Col md={4} className="text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
              <Col md={4} className="text-center">
                <Button variant="danger" onClick={handlecloseClick}>
                  Close
                </Button>
              </Col>
            </Row>
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddForm;
