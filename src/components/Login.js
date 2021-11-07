import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/Authcontext";
import { Link, useHistory } from "react-router-dom";
import LoginWithGoogle from "./LoginwithGoogle";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      seterror("");
      setloading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      seterror("invalid email or password!");
    }
    setloading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login Here</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account?
        <Link to="/signup" style={{ textDecoration: "none" }}>
          Sign up
        </Link>
      </div>

      <LoginWithGoogle />
      <Link to="/loginWithPhone">or Login with Phone</Link>
    </>
  );
};

export default Login;
