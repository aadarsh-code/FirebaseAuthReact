import React, { useState } from "react";
import { Card, Button, Alert, Navbar, Container, Nav } from "react-bootstrap";
import { useAuth } from "../context/Authcontext";
import { Link, useHistory } from "react-router-dom";
const Dashboard = () => {
  const history = useHistory();
  const [error, seterror] = useState("");
  const { currentUser, logout } = useAuth();
  async function handlelogout() {
    seterror("");
    try {
      await logout();
      history.push("/login");
    } catch {
      seterror("something went wrong");
    }
  }
  return (
    <>
      {/* <Card> */}
      {/* <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong>
          {currentUser.email}
          <Link to="/update-profile" className=" btn btn-primary  w-100 mt-3">
            Update profile
          </Link>
        </Card.Body>
      </Card> */}
      {/* <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handlelogout}>
          Log out
        </Button>
      </div> */}
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <h1>DashBoard</h1>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">{currentUser.email}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Button variant="link" onClick={handlelogout}>
            LogOut
          </Button>
        </Nav.Item>
      </Nav>
      <div className="container">
        <h2>Hello How are you</h2>
      </div>
    </>
  );
};

export default Dashboard;
