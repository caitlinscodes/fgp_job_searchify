import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.address}</p>
        <p>{props.city}</p>
        <p>{props.state}</p>
        <p>{props.zip}</p>
        <textarea>{props.summary}</textarea>
        <p>{props.title}</p>
        <p>{props.company}</p>
        <textarea>{props.experience}</textarea>
        <textarea>{props.skills}</textarea>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download as Resume</button>}
      </Pdf>
    </>
  );
}

export default PDF;