import React from  "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Type from "./Type";
import Logo from "../../assets/job.searchify_logo.png"

function Splash() {
  return (
    <section>
      <Container fluid className="splash-page" id="splash">
        {/* <Particle />  What does this do???*/}
        <Container fluid className="splash-main">
          <Row>
            <img src={Logo} alt="JOB.searchify logo" className="img-fluid" />
            <Type />
          </Row>
        </Container>

        <Container fluid className="splash-description">
          <Row>
            <Col><img src="https://via.placeholder.com/200" alt="placeholder image"/></Col>
            <Col>
              <h3>Job Search Functionality</h3>
              <p>Lorem ipsum dolor sit amet. Sed debitis distinctio ab maxime repellat sit ipsa galisum id similique voluptatem qui quia  aut officia  ut nobis facere? Non omnis nostrum At dignissimos omnis est labore nesciunt sit iste totam. Rem debitis quia non doloremque temporibus sit libero facere sit quam labore vel pariatur odio. </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Resume Builder Functionality</h3>
              <p>Lorem ipsum dolor sit amet. Sed debitis distinctio ab maxime repellat sit ipsa galisum id similique voluptatem qui quia  aut officia  ut nobis facere? Non omnis nostrum At dignissimos omnis est labore nesciunt sit iste totam. Rem debitis quia non doloremque temporibus sit libero facere sit quam labore vel pariatur odio. </p>
            </Col>
            <Col><img src="https://via.placeholder.com/200" alt="placeholder image"/></Col>
          </Row>
        </Container>

        <Container fluid className="splash-about">
          <h3>About the Creators</h3>
          <Row>
            <Col>
              <img src="https://via.placeholder.com/100" alt="placeholder image"/>
              <h5>Johnathan Andila</h5>
              <p>Lorem ipsum dolor sit amet. Sed debitis distinctio ab maxime repellat sit ipsa galisum id similique voluptatem qui quia  aut officia  ut nobis facere? Non omnis nostrum At dignissimos omnis est labore nesciunt sit iste totam. Rem debitis quia non doloremque temporibus sit libero facere sit quam labore vel pariatur odio. </p>
            </Col>
            <Col>
              <img src="https://via.placeholder.com/100" alt="placeholder image"/>
              <h5>Inna Arabejo</h5>
              <p>Lorem ipsum dolor sit amet. Sed debitis distinctio ab maxime repellat sit ipsa galisum id similique voluptatem qui quia  aut officia  ut nobis facere? Non omnis nostrum At dignissimos omnis est labore nesciunt sit iste totam. Rem debitis quia non doloremque temporibus sit libero facere sit quam labore vel pariatur odio. </p>
            </Col>
            <Col>
              <img src="https://via.placeholder.com/100" alt="placeholder image"/>
              <h5>Matt Jackson</h5>
              <p>Lorem ipsum dolor sit amet. Sed debitis distinctio ab maxime repellat sit ipsa galisum id similique voluptatem qui quia  aut officia  ut nobis facere? Non omnis nostrum At dignissimos omnis est labore nesciunt sit iste totam. Rem debitis quia non doloremque temporibus sit libero facere sit quam labore vel pariatur odio. </p>
            </Col>
            <Col>
              <img src="https://via.placeholder.com/100" alt="placeholder image"/>
              <h5>Caitlin Stevenson</h5>
              <p>Lorem ipsum dolor sit amet. Sed debitis distinctio ab maxime repellat sit ipsa galisum id similique voluptatem qui quia  aut officia  ut nobis facere? Non omnis nostrum At dignissimos omnis est labore nesciunt sit iste totam. Rem debitis quia non doloremque temporibus sit libero facere sit quam labore vel pariatur odio. </p>
            </Col>
          </Row>
        </Container>

        <Container fluid className="splash-contact">
          <Row>
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
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Splash;
