import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  let from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password).then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div style={{ marginLeft: "400px", marginRight: "400px", marginTop: "50px"}}>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>
            {" "}
            <h4>Enter your Credentials</h4>
          </Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            style={{ margin: "auto" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            {" "}
          </Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
      <>
        <div className="mb-2 mt-3">
          <Button
            variant="light"
            size="lg"
            style={{ border: "2px solid black", fontWeight: "bold" }}
            onClick={handleGoogleSignIn}
          >
            <FcGoogle /> Sign in with Google
          </Button>
        </div>
      </>
    </div>
  );
};

export default Login;
