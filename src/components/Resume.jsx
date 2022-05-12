// import { useState} from "react";
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';



function Resume() {
  const [value, onChange] = useState(new Date());
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
          <div class="content">
          
            <div class="right-side">
              <h1 class="topic-text">Build Your Resume!</h1>
              <p>Fill in the form to generate your resume into a PDF.</p>
              <form action="https://formspree.io/f/xnqwlaaj" method="POST">
                <label class="input-box">Name
                  <input type="text" name="name" />
                </label>
                <label class="input-box">Email
                  <input type="text" name="email" />
                </label>
                <label class="input-box">Phone
                  <input type="text" name="phone" />
                </label>
                <label class="input-box">Address
                  <input type="text" name="address" />
                </label>
                <label class="input-box">City, State, Zip
                  <input type="text" name="location" />
                </label>
                <hr/>
                <label class="input-box">Summary/Brand Statement
                  <textarea class="form-control" rows="5" name="summary"></textarea>
                </label>
                <hr/>
                <label class="input-box">Skills
                  <textarea class="form-control" rows="2" name="skills" placeholder="Include soft and hard skills">
                  </textarea>
                </label>
                <hr/>
                <div class="input-box">Work Experience 1</div>
                  <label class="input-box">
                    <input type="text" name="title" placeholder="Title"/>
                  </label>
                  <div class="dates">
                    <DatePicker onChange={onChange} value={value} />
                    <DatePicker onChange={onChange} value={value} />
                  </div>
                  <textarea class="form-control" rows="5" name="experience" placeholder="Description">
                  </textarea>
                <hr/>
                <div class="input-box">Work Experience 2</div>
                  <label class="input-box">
                    <input type="text" name="title" placeholder="Title"/>
                  </label>
                  <div class="dates">
                    <DatePicker onChange={onChange} value={value} />
                    <DatePicker onChange={onChange} value={value} />
                  </div>
                    <textarea class="form-control" rows="5" name="experience" placeholder="Description">
                  </textarea>
                <hr/>
                <div class="input-box">Work Experience 3</div>
                  <label class="input-box">
                    <input type="text" name="title" placeholder="Title"/>
                  </label>
                  <div class="dates">
                    <DatePicker onChange={onChange} value={value} />
                    <DatePicker onChange={onChange} value={value} />
                  </div>
                    <textarea class="form-control" rows="5" name="experience" placeholder="Description">
                  </textarea>
                <hr/>
                <div class="input-box">Education</div>
                  <label class="input-box">
                    <input type="text" name="degree" placeholder="Degree"/>
                  </label>
                  <label class="input-box">
                    <input type="text" name="major" placeholder="Major"/>
                  </label>
                <hr/>
                <label class="input-box">Certifications/Achievements
                  <textarea class="form-control" rows="2" name="certification">
                  </textarea>
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