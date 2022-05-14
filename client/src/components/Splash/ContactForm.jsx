import React from  "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// Code to display form on Splash Page (not linked to backend)
function ContactForm() {
  return (
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
  );
}

export default ContactForm;

// Code to attempt to connect backend to front end

// Imports to connect to backend routing
// import { useState, useEffect } from "react";

// const ContactForm = (props) => {

//   const newForm = { email: "", contact_text: "" }
//   const [ formData, setFormData ] = useState(newForm)

//   const handleInputChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value})
//   }

//   const handleFormSubmit = async(e) => {
//     e.preventDefault()

//     const query = await fetch("/api/contact", {
//       method: "post",
//       body: JSON.stringify(formData),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//     console.log(query)

//     const result = await query.json()
//     console.log(result)
//   }
  

//   return (
//     <Container className="splash-contact">
//       <h3>Contact Us</h3>
//             <Row>
//             <Col>
//             <Form>
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} />
//                 <Form.Text className="text-muted">
//                   We'll never share your email with anyone else.
//                 </Form.Text>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                 <Form.Label>What's on your mind?</Form.Label>
//                 <Form.Control as="textarea" rows={3} type="text" value={formData.contact_text} onChange={handleInputChange} />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Subscribe to our Newsletter!" />
//               </Form.Group>
//               <Button variant="primary" type="submit" onClick={handleFormSubmit}>
//                 Submit
//               </Button>
//             </Form>
//             </Col>
//             </Row>
//       </Container>
//   );

// }