import React from "react";
import MainScreen from "../../components/MainScreen";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./LoginScreen.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginScreeen = () => {

    

  return (
    <MainScreen title="Login">
      <div className="loginContainer">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New User ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginScreeen;
