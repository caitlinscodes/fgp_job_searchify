import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

// import joblist from "../joblist.json"
// Use props to input state to ternary operators.
// In our return method, we use the map method to return a new array of 'jobs' that are specific to each search result
const JobResultList = (props) => {
  return (
    <>
      {props.results.map((job) => (
        <Card key={job._id} className="text-center mb-3">
          <Card.Header>
            <div className="d-flex justify-content-between"></div>
            <Card.Title>
              {job.job_title} {" - "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
          </Card.Header>

          <Card.Body>
            <Card.Subtitle className="text-muted mb-2">
              Department{" ~ "}
              {job.department}
            </Card.Subtitle>
            <Card.Subtitle className="text-muted mb-2">
              Date Posted {" ~ "}
              {job.date}
            </Card.Subtitle>
            <Card.Text className="">
              Location {" ~ "}
              {/* <span> */}
              <Badge pill variant="danger">
                {job.city}
              </Badge>{" "}
              <Badge pill variant="success">
                {job.location}
              </Badge>
              {/* </span> */}
            </Card.Text>
            <Card.Text></Card.Text>
            Salary{" ~ "}
            <Badge pill variant="success">
              {job.salary}
            </Badge>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href={job.url}>
              <Button variant="primary">Apply</Button>
            </a>
          </Card.Footer>
        </Card>
      ))}
    </>
  );
};

export default JobResultList;
