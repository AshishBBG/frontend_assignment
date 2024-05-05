import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 for generating unique keys
import JobSingle from './JobContainerBox/JobSingle'; // Import your JobSingle component
// import debounce from 'lodash/debounce'; // Import debounce function from lodash
import './JobFilterStyle.css'
import JobContainer from './JobContainerBox/JobContainer';
import JobInputBox from './JobFilteration/JobInputBox';

function JobFilter({ jobData, loading, handleScroll }) {

    const [filteredJobs, setFilteredJobs] = useState([]);
    const [userInputSearch, setUserInputSearch] = useState('');

    // useEffect(() => {
    //     // Add scroll event listener when component mounts
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         // Remove scroll event listener when component unmounts
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);



    return (
        <div className="main-container">


            
            <JobInputBox placeholder='Roles' setUserInputSearch={setUserInputSearch}
                jobData={jobData} setFilteredJobs={setFilteredJobs}
                toSearch='jobRole'
            />
            {/* {console.log(userInputSearch)} */}
            {console.log(jobData)}

            <JobInputBox placeholder='Experience' setUserInputSearch={setUserInputSearch}
                jobData={jobData} setFilteredJobs={setFilteredJobs}
                toSearch='minExp'
            />

            <JobInputBox placeholder='Minimum Base Pay salary' setUserInputSearch={setUserInputSearch}
                jobData={jobData} setFilteredJobs={setFilteredJobs}
                toSearch='minJdSalary' 
            />

            <JobInputBox placeholder='Company Name'  setUserInputSearch={setUserInputSearch}
                jobData={jobData} setFilteredJobs={setFilteredJobs}
                toSearch='companyName'
            />
            





            {/* <JobInputBox placeholder='Number Of Employees' />
            <JobInputBox placeholder='Experience' />
            <JobInputBox placeholder='Minimum Base Pay salary' />
            <JobInputBox placeholder='Search Company Name' /> */}

            {/* <input
                type="search"
                placeholder="Roles"
                className="input-box-job"
                onChange={(e) => {
                    setJobRole(e.target.value)
                    search();
                }}
            /> */}
            {/* <div className="apply-flex">
                {console.log(filteredJobs.length)}
                {console.log(jobData)}

                {
                    jobRole.length ?
                        filteredJobs.map(job => (
                            <div key={uuidv4()}>
                                <JobSingle {...job} />
                            </div>
                        )) : <JobContainer jobData={jobData} loading={loading} handleScroll={handleScroll} />
                }
            </div> */}

            <div className="apply-flex">
                {/* {console.log(filteredJobs.length)} */}
                {/* {console.log(jobData)} */}
                {/* {console.log(userInputSearch)}
                {console.log(filteredJobs)} */}

                {
                    userInputSearch.length ?
                        filteredJobs.map(job => (
                            <div key={uuidv4()}>
                                <JobSingle {...job} handleScroll={handleScroll}/>
                                

                            </div>
                        )) 
                        : <JobContainer jobData={jobData} loading={loading} handleScroll={handleScroll} />
                }
            </div>





            {/* <input type="text" placeholder="Number Of Employees" className="input-box-job" />
            <input type="text" placeholder="Experience" className="input-box-job" />
            <input type="text" placeholder="Remote" className="input-box-job" />
            <input type="text" placeholder="Minimum Base Pay salary" className="input-box-job" />
            <input type="text" placeholder="Search Company Name" className="input-box-job" /> */}

        </div>
    );
}

export default JobFilter;
