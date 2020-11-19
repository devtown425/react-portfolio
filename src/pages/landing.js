import React from 'react';
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProfileImg from "../assets/pic.png";

function Landing() {
    return (
        <React.Fragment>
            <div className="landing-text">
                <h4 style={{lineHeight: "85%"}}>Hey there! I'm</h4>
                <h1>Hao Guan</h1>
                <h4>Full Stack Web Developer</h4>
                <Link to="/about">
                    <Button variant="primary" className="landing-button">Enter Site</Button>
                </Link>
            </div>
            <Row className="landing-bg">
                <Col lg={10} md={12}className="landing-blue">
                </Col>
                <Col lg={2}>
                    <img className="landing-img" src={ProfileImg} alt="My Face"/>
                </Col>
            </Row>
            
        </React.Fragment>
    )
}

export default Landing;