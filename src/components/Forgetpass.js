import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/Authcontext";
import { Link } from "react-router-dom";
const Forgetpass = () => {
  const emailRef = useRef();

  const { resetpass } = useAuth();
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setmessage("");
      seterror("");
      setloading(true);
      await resetpass(emailRef.current.value);
      setmessage("check your inbox ");
    } catch {
      seterror("failed to reset your password");
    }
    setloading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="sucess">{message}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account?
        <Link to="/signup" style={{ textdecoration: "none" }}>
          Sign up
        </Link>
      </div>
    </>
  );
};

export default Forgetpass;
