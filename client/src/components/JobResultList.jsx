import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
// import joblist from "../joblist.json"
// import ata
import ReactMarkdown from "react-markdown";

// In our return method, we use the map method to return a new array of 'jobs' that are specific to each search result 
const JobResultList = ({results}) => {
    return (
        <>
            {results.map( (job) => {
                <Card className="text-center">
                    <Card.Header>{job.Company}</Card.Header>
                    <Card.Body>
                        <Card.Title>{job.Software_development}</Card.Title>
                        <Card.Text>
                            {job.City} * {job.State} * {job.Salary} * 
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{job.Date_Posted}</Card.Footer>
                </Card>
            })}
        </>
    )
}

export default JobResultList;