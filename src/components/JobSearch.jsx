import { useState, useEffect } from 'react';
import React from 'react'
import { Form, Col } from "react-bootstrap";
import JobResultList from './JobResultList';
import joblist from "../joblist.json";


//Import our search methods
// import search from '../utils/API';
console.log('I am rendering');


const JobSearch = () => {
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

  // Search the json data for whatever the searchTerm is 
  // And set searchResults to whatever the result is
  const searchData = () => {
    console.log(searchTerm)
    // search the json data for whatever the user is looking for
    // use array.filter()
    // use setSearchResults()
  }

  // Method to get search results and set state
  // const searchJobs = async (query) => {
  //     const response = await search(query);
  //     setResults(response.data.data);
  // };


  // We want to run this method when the component first loads so that we have data for jobs to display to the page
  //The second argument is the dependency array. this means this method will onlyrun when the compent first loads

  return (
    <div className="dashboard">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Job Search</h1>
            {/* Pass our results to the jobResultList component to map over  */}
            <div>
              <input
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              {/* {JSONDATA.filter((val) => {
                  if (searchTerm == "") {
                    return val
                  } else if (val.Company.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                  }
                }).map((val, key) => {
                  return <div className="user" key={key}> <p>{val.Company}</p></div>
                })} */}
              <button onClick={searchData}>Search</button>
            </div>

            {searchResults.length > 0 && (
              <div>
                <JobResultList results={searchResults} />
              </div>
            )}

            {/* <JobResultList results={results} /> */}
          </div>
        </div>
      </div>
    </div>
  );

};



export default JobSearch;