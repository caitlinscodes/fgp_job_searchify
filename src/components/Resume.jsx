// import { useState} from "react";
import React from "react";



function Resume() {
  // const [ resume, setResume ] = useState({})

  // const getInfo = () => {

  // }
  /*
  _id
  Name
  Address
  Address2
  City
  State
  Zip
  Phone 
  Email

  Summary (string)

  Work Experience: array
     Title
     Dates They Worked There
     Description 

  Skills: array of strings


*/

  /*
  Get ReactPDF to work with a component that renders static content
  See if it works with dynamic content
  See if it works after you do an api call
  */


  return (
    <div className="resume">
      <div class="container">
        {/* <h1 class="font-weight-heavy">Resume</h1> */}
          <div class="content">
          
            <div class="right-side">
              <div class="topic-text">Build Your Resume!</div>
              <p>Fill in the form to generate your resume into a PDF.</p>
              <form action="https://formspree.io/f/xnqwlaaj" method="POST">
                <label class="input-box">Enter your name
                  <input type="text" name="name" />
                </label>
                <label class="input-box">Enter your email
                  <input type="text" name="email" />
                </label>
                <label class="input-box">Address
                  <input type="text" name="address" />
                </label>
                <label class="input-box">Address 2
                  <input class="form-control" rows="5" name="address 2"></input>
                </label>
                <div>
                  <input class="button" type="button" value="Download PDF" />
                </div>
                <div id="status" role="alert">
                </div>
              </form>
            </div>
            </div>
        {/* <div class="row align-items-center my-5">
          
          <div class="col-lg-5">
            <h1 class="font-weight-light">Resume</h1> */}

            {/* <h3>{ resume.firstname }</h3>

            { resume.experience.map( item=> (
              <ExperinceBlock {...item} />
            ))}

            <ul>
            { resume.skills.map( skill => (
              <li>{skill}</li>
            ))}
            </ul> */}

      </div>
    </div>
  );
}

export default Resume;