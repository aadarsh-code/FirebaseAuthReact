import React, { useRef } from "react";
import { auth } from "..//firebase";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const LoginwithPhone = () => {
  const phoneRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(phoneRef.current.value);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login with Phone</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Phone no</Form.Label>
              <Form.Control type="number" ref={phoneRef} required />
            </Form.Group>
            <Button className="w-100 mt-3" type="submit">
              Submit
            </Button>
            <Link to="/login">
              {" "}
              <Button className="w-100 mt-3" type="submit">
                Back
              </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default LoginwithPhone;
