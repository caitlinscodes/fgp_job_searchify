import React from  "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";
// import Type from "./Type";
import Logo from "../../assets/job.searchify_logo2.png";
import JJohnson from "../../assets/jj_profile.png";
import MJackson from "../../assets/mj_profile.png";
import IArabejo from "../../assets/ia_profile.png";
import CStev from "../../assets/cs_profile.png";
import JobSearch from "../../assets/jobSearch_img.png";
import Resume from "../../assets/resume_img.png";


function Splash() {
  return (
    <ThemeProvider>
    <section className="splash-container">
      <Container className="splash-page" id="splash">
        <Container className="splash-main">
          <Row>
            {/* <h1>JOB.searchify(</h1><Type /><h1>)</h1> */}
            <img src={Logo} alt="JOB.searchify logo" className="img-fluid" />
            
          </Row>
        </Container>
        <br></br>
        <Container className="splash-description">
          <Row>
            <Col><img src={JobSearch} alt="computer image"/></Col>
            <Col>
              <h3>Job Search Functionality</h3>
              <p>Lorem ipsum dolor sit amet. Sed debitis distinctio ab maxime repellat sit ipsa galisum id similique voluptatem qui quia  aut officia  ut nobis facere? Non omnis nostrum At dignissimos omnis est labore nesciunt sit iste totam. Rem debitis quia non doloremque temporibus sit libero facere sit quam labore vel pariatur odio. </p>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <h3>Resume Builder Functionality</h3>
              <p>Lorem ipsum dolor sit amet. Sed debitis distinctio ab maxime repellat sit ipsa galisum id similique voluptatem qui quia  aut officia  ut nobis facere? Non omnis nostrum At dignissimos omnis est labore nesciunt sit iste totam. Rem debitis quia non doloremque temporibus sit libero facere sit quam labore vel pariatur odio. </p>
            </Col>
            <Col><img src={Resume} alt="resume image"/></Col>
          </Row>
        </Container>
        <br></br>
        <Container className="splash-about">
          <h3>About the Creators</h3>
          <Row>
            <Col>
              <img src={IArabejo} alt="placeholder image"/>
              <h5>Inna Arabejo</h5>
              <p>My name is Inna Arabejo, and I am an aspiring full stack developer versed in building projects from the ground up with a primary focus on MERN Stack web applications. </p>
            </Col>
            <Col>
              <img src={MJackson} alt="placeholder image"/>
              <h5>Matt Jackson</h5>
              <p>Web Developer Currently enrolled at SMU Boot Camp </p>
            </Col>
            <Col>
              <img src={JJohnson} alt="Jonathan Johnson"/>
              <h5>Johnathan Johnson</h5>
              <p>Passionate about writing clean, readable, and reusable code? Interested in building frontend and backend web applications, I also dibble and dabble in robotics. </p>
            </Col>
            <Col>
              <img src={CStev} alt="placeholder image"/>
              <h5>Caitlin Stevenson</h5>
              <p>Howdy! I am an experienced professional transitioning into the web development field. </p>
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container className="splash-contact">
          <h3>Contact Us</h3>
          <Row>
          <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>What's on your mind?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Subscribe to our Newsletter!" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Col>
          </Row>
        </Container>
      </Container>
    </section>
    </ThemeProvider>
  );
}

export default Splash;
