import React, { useState } from 'react';
//import { Row, Col } from 'react-bootstrap';
import AboutImg from "../assets/car.png";
//import About from "../components/About";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function AboutPage() {
    return (
        <div style={{ height: '100%', width: '100%' }}>
                

               
                    <Hero backgroundImage = {AboutImg}>
                    </Hero>

                    <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <p>
                This is Hao. I am a current candidate in web developer bootcamp at the University of Washington. I am very passionate about software development.
                I can easily spend an afternoon developing software or exploring new software technologies. On my freetime, I like to cook new food or I may be out skiing. 
                I am a casual motorhead. I like traveling when I have chunk of vacation time.
              massa.
            </p>
          </Col>
        </Row>
      </Container>
                
               
        </div>
    )
}

export default AboutPage;