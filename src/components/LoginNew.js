import React, { useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
const LoginNew = () => {
  const [textInput, setTextInput] = useState("");
  //const userInputHandler = (e) => {
  //  setTextInput(e.target.value);
  //};
  return (
    <div className="login-container">
      <h1>Welcome to Covid simulation</h1>

      <Form>
        <div class="field-password" className="line">
          <input type="text" placeholder="Password" required />
        </div>
        <div class="field-participantNumber innactive">
          <input type="password" placeholder="Password" required />
        </div>
      </Form>
    </div>
  );
};
export default LoginNew;
