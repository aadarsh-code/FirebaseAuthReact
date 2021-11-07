import React from "react";
import { auth, provider } from "../firebase";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
const LoginWithGoogle = () => {
  const history = useHistory();

  const login = (e) => {
    // e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((user) => history.push("/"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <Button className="container mt-3" onClick={login}>
          Log In with Google
        </Button>
      </div>
    </div>
  );
};

export default LoginWithGoogle;
