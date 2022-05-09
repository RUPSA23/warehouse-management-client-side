import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let from = location.state?.from?.pathname || "/login";

  const Person = { email, password };
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log("success", data);
      navigate(from, { replace: true });
    });
  };

  return (
    <div style={{ marginLeft: "400px", marginRight: "400px", marginTop: "50px" }}>
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
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
