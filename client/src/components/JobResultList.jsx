import React from "react";
import { Card, Button } from "react-bootstrap";

// import joblist from "../joblist.json"
// Use props to input state to ternary operators.
// In our return method, we use the map method to return a new array of 'jobs' that are specific to each search result
const JobResultList = (props) => {
  return (
    <>
      {props.results.map((job) => (
        <Card key={job.id} className="text-center">
          <Card.Header>
            <h5>Company</h5>
            {job.company}
          </Card.Header>

          <Card.Body>
            <Card.Title>
              <h4>Department:</h4>
              {job.department}
            </Card.Title>
            <Card.Title>
              <h5>Position:</h5>
              {job.job_title}
            </Card.Title>

            <Card.Text>
              Location
              {job.location} * {job.city}
            </Card.Text>

            <Card.Text>
              Salary:
              {job.salary}
            </Card.Text>

            <Card.Text>
              Date Posted:
              {job.date}
            </Card.Text>

            <a href={job.url}>
              <Button variant="primary">Apply</Button>
            </a>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      ))}
    </>
  );
};

export default JobResultList;
