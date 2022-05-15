import { useState, useEffect } from "react";
import React from "react";
import JobSearchForm from "./JobSearchForm";
import JobResultList from "./JobResultList";
import getAllJobs from "../utils/API";

//Import our search methods
// import search from '../utils/API';

/*
   Create a parent component that contains both the search form and the results area
   Manage state here  
   Pass the state and the state setters into the other components 
*/

// Search the json data for whatever the searchJob is
// And set searchResults to whatever the result is
const JobSearch = () => {
  const [searchByJob, setSearchByJob] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  // this state will be updated once on component load and will be used to filter from to set the displayed results
  const [allResults, setAllResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  // We want to run the useEffect method when the component first loads so that we have data for jobs to display to the page
  //The second argument is the dependency array. this means this method will onlyrun when the compent first loads

  const searchData = (e) => {
    e.preventDefault();
    console.log(searchByJob, searchByLocation)
    const searchResult = allResults.filter(
      (job) => {
        console.log(
          job.job_title,
          searchByJob,
          job.location,
          searchByLocation,
          searchByJob.length > 0 && searchByLocation.length > 0
        );
        return searchByJob.length > 0 && searchByLocation.length > 0
          ? (searchByJob.length > 0
            ? job.job_title.toLowerCase().includes(searchByJob.toLowerCase())
            : false && searchByLocation.length > 0
            ? job.location
                .toLowerCase()
                .includes(searchByLocation.toLowerCase())
            : false)
          : (searchByJob.length > 0
          ? job.job_title.toLowerCase().includes(searchByJob.toLowerCase())
          : false || searchByLocation.length > 0
          ? job.location.toLowerCase().includes(searchByLocation.toLowerCase())
          : false);
      }
    );
    /*
    job_title = SpongeBob
    searchByJob = sponge or pon or 
    */
    console.log(searchResult);
    setFilteredResults(searchResult);
  };

  useEffect(() => {
    getAllJobs().then(response => {
      console.log(response.data)
      // all results set on page load---we will never mutate this data again
      setAllResults(response.data);
      //  setFilteredResults(response.data)
    })
  }, []);

  // **TO DO**  Need to add a use effect to our smart component that will fetch the job data and set it to the state

  return (
    <div className="dashboard">
      <h1 className="font-weight-light">Job Search</h1>
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">Job Search</h1>
            <div className="search-form-container">
            {/* Search bar for Job and Location */}
            <JobSearchForm
              searchByJob={searchByJob}
              searchByLocation={searchByLocation}
              setSearchByJob={setSearchByJob}
              setSearchByLocation={setSearchByLocation}
              searchData={searchData}
            />
            </div>
            {/* Pass our results From JobSearchForm to the JobResultList component to map over  */}
            <div className="search-form-results align-items-center">
            {filteredResults.length === 0 ? (
              <div>No Results Found for your Search</div>
            ) : (
              <JobResultList results={filteredResults} />
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
