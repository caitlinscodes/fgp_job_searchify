import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Resume" class="PDF-format" ref={ref}>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.address}</p>
        <p>{props.location}</p>
        <hr/>
        <p>{props.summary}</p>
        <hr/>
        <p>{props.skills}</p>
        <hr/>
        <p>{props.title1}</p>
        <p>{props.company1}</p>
        <p>{props.experience1}</p>
        <hr/>
        <p>{props.title2}</p>
        <p>{props.company2}</p>
        <p>{props.experience2}</p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button id="pdf-btn" className="btn btn-primary btn-m" onClick={toPdf}>Download Resume</button>}
      </Pdf>
    </>
  );
}

export default PDF;