import React from  "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";
// import Type from "./Type";
import ContactForm from "./ContactForm";
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
              <Col>
                <img src={JobSearch} alt="computer" />
              </Col>
              <Col>
                <h3>Find Your Next Tech Job</h3>
                <p>
                  Looking for a career in tech but don't know where to start?
                  Our tech industry job search platform is your one stop shop
                  for your next job search. Our user friendly search engine
                  weeds through thousands of postings to bring you the best tech
                  jobs around. Happy Job Hunting!
                </p>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <h3>Build the Perfect Resume</h3>
                <p>
                  Crafting a resume can be time consuming and confusing, but
                  with our built in Resume Builder you'll have a professional CV
                  ready in minutes. Put your best foot forward in the job
                  application process and create an account with us to start
                  building your resume today!
                </p>
              </Col>
              <Col>
                <img src={Resume} alt="resume" />
              </Col>
            </Row>
          </Container>
          <br></br>
          <Container className="splash-about">
            <h3>About the Creators</h3>
            <Row>
              <Col>
                <img src={IArabejo} alt="Inna Profile" />
                <h5>Inna Arabejo</h5>
                <p>
                  My name is Inna Arabejo, and I am an aspiring full stack
                  developer versed in building projects from the ground up with
                  a primary focus on MERN Stack web applications.{" ~ "}
                  <a
                    href="https://github.com/inna-arabejo"
                    style={{ color: "white" }}
                  >
                    Contact Inna
                  </a>
                </p>
              </Col>
              <Col>
                <img src={MJackson} alt="Matt Profile" />
                <h5>Matt Jackson</h5>
                <p>
                  Web Developer Currently enrolled at SMU Boot Camp{" ~ "}
                  <a
                    href="https://github.com/Matt4292"
                    style={{ color: "white" }}
                  >
                    Contact Matt
                  </a>
                </p>
              </Col>
              <Col>
                <img src={JJohnson} alt="Jonathan Johnson" />
                <h5>Johnathan Johnson</h5>
                <p>
                  Passionate about writing clean, readable, and reusable code?
                  Interested in building frontend and backend web applications,
                  I also dibble and dabble in robotics.{" ~ "}
                  <a
                    href="https://github.com/jayBassMan"
                    style={{ color: "white" }}
                  >
                    Contact Jonathan
                  </a>
                </p>
              </Col>
              <Col>
                <img src={CStev} alt="Caitlin Profile" />
                <h5>Caitlin Stevenson</h5>
                <p>
                  Howdy! I am an experienced professional transitioning into the
                  web development field.{" ~ "}
                  <a
                    href="https://github.com/caitlinscodes"
                    style={{ color: "white" }}
                  >
                    Contact Caitlin
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
          <br></br>
          {/* Router to call in Contact Form
          <Router>
            <Routes>
              <Route path="/" element={<ContactForm />} />
            </Routes>
          </Router> */}

          <ContactForm />
        </Container>
      </section>
    </ThemeProvider>
  );
}

export default Splash;

