import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjeev Murikipudi </span>
            from <span className="purple"> Andhra pradesh, India.</span>
            <br />
            I am currently employed as a software developer at Maang Technologies.
            <br />
            I am currently Persuing B.Tech in Computer Science at RGUKT RK VALLEY(IIIT).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sanjeev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
