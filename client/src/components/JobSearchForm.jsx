import React from 'react';
import {
  Form,
  Col,
  InputGroup,
  FormControl,
  Button,
  Row,
} from "react-bootstrap";



        
const JobSearchForm = ( props ) => {
  return (
    <Form>
      
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Search
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                value={props.searchByJob}
                name="searchJob"
                onChange={(e) => props.setSearchByJob(e.target.value)}
                placeholder="Search Job"
              />
            </Col>
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Location
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  id="inlineFormInputGroup"
                  value={props.searchByLocation}
                  name="location"
                  onChange={(e) => props.setSearchByLocation(e.target.value)}
                  placeholder="Location"
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                label="Remember me"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2" onClick={props.searchData}>
                Submit
              </Button>
            </Col>
          </Row>
 
    </Form>
  );
}

export default JobSearchForm;