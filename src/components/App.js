import React from "react";
import { Container } from "react-bootstrap";
import AuthProvider from "../context/Authcontext";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import Forgetpass from "./Forgetpass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import LoginwithPhone from "./LoginwithPhone";
const App = () => {
  return (
    // <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: "100vh" }}
    // >
    <div className="root">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forget-password" component={Forgetpass} />
            <Route path="/LoginWithPhone" component={LoginwithPhone} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
    // </Container>
  );
};

export default App;
