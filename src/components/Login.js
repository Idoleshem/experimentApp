import React, { useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
const Login = () => {
  const [textInput, setTextInput] = useState("");
  //const userInputHandler = (e) => {
  //  setTextInput(e.target.value);
  //};
  return (
    <div className="login-container">
      <h1>Welcome to Covid simulation</h1>
      <h1>Please enter a password</h1>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          className="field"
        />
        <Button variant="Action 4" className="button">
          OK
        </Button>{" "}
      </Form.Group>
    </div>
  );
};
export default Login;
