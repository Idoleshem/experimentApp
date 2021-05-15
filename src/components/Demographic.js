import React from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
const Demographic = () => {
  return (
    <div className="demographic-container">
      <Form>
        <Form controlId="formBasicEmail" className="line">
          <Form.Label>Participant number: </Form.Label>
          <Form.Control placeholder="4" />
        </Form>
        <Form controlId="formBasicEmail" className="line">
          <Form.Label>Initials: </Form.Label>
          <Form.Control type="email" placeholder="Jerry Seinfeld = JS" />
        </Form>

        <Form.Group controlId="exampleForm.ControlInput1" className="line">
          <Form.Label>Age </Form.Label>
          <Form.Control type="email" placeholder="25" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Sex</Form.Label>
          <Form.Control as="select" multiple className="multiple">
            <option>Female</option>
            <option>Male</option>
            <option>Prefer not to answer</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Vision</Form.Label>
          <Form.Control as="select" multiple className="multiple">
            <option>Normal / corrected to normal</option>
            <option>Vision impairment</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>English language command level:</Form.Label>
          <Form.Control as="select" multiple className="multiple">
            <option>Excellent command</option>
            <option>Very good command</option>
            <option>Good command</option>
            <option>Basic communication skills</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Education level which you had completed: </Form.Label>
          <Form.Control as="select" multiple className="multiple">
            <option>Less than a high school diploma</option>
            <option>High school diploma</option>
            <option>Bachelor's degree</option>
            <option>Master's degree</option>
            <option>Doctorate (PhD)</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>What is your main academic discipline? </Form.Label>
          <Form.Control as="select" multiple className="multiple">
            <option>
              Humanities (philosophy, literature, performing arts, visual arts)
            </option>
            <option>
              Social Sciences (psychology, sociology, economics, political
              science)
            </option>
            <option>Natural Sciences ( biology, chemistry, physics)</option>
            <option>Formal Sciences (computer science, mathematics)</option>
            <option>
              Applied Sciences (engineering and technology, medicine and health)
            </option>
            <option>Other</option>
            <option>Not relevant</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>
            What is your experience with strategy games/thinking games?{" "}
          </Form.Label>
          <Form.Control as="select" multiple className="multiple">
            <option>I rarely play strategy games</option>
            <option>
              I play strategy games from time to time, usually less than 1 hour
              a week
            </option>
            <option>
              I usually spent few hours a week playing strategy games
            </option>
            <option>
              I usually spent few hours a day playing strategy games
            </option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          label=" I agree to participate in the study"
          type="checkbox"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
};
export default Demographic;
