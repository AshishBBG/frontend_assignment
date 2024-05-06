import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 for generating unique keys
import JobSingle from './JobContainerBox/JobSingle'; // Import your JobSingle component
// import debounce from 'lodash/debounce'; // Import debounce function from lodash
import './JobFilterStyle.css'
import JobContainer from './JobContainerBox/JobContainer';
import JobInputBox from './JobFilteration/JobInputBox';

function JobFilter({ originalData, jobData, loading, handleScroll }) {

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
    // useEffect(() => {
    //     setFilteredJobs(originalData);
    // }, [originalData]); // Update filteredJobs whenever jobData changes
    
    // useEffect(() => {
    //     // Whenever original data changes or userInputSearch changes, apply filtering
    //     filterJobs();
    // }, [userInputSearch, originalData]);

    // const filterJobs = () => {
    //     // Perform filtering based on userInputSearch and update filteredJobs state
    //     const filtered = originalData.filter(job => {
    //         // Implement your filtering logic here
    //         // For example, filtering based on job role
    //         return job.jobRole.toLowerCase().includes(userInputSearch.toLowerCase());
    //     });
    //     // setFilteredJobs(filtered);
    //     setFilteredJobs(prevFilteredJobs => [...prevFilteredJobs, ...filtered]);
    // };
    // const filterJobs = () => {
    //     // Perform filtering based on userInputSearch and update filteredJobs state
    //     if (userInputSearch.trim() === '') {
    //         // Clear filteredJobs if userInputSearch is empty
    //         setFilteredJobs([]);
    //     } else {
    //         // Apply filtering if userInputSearch is not empty
    //         const filtered = originalData.filter(job => {
    //             // Implement your filtering logic here
    //             // For example, filtering based on job role
    //             return job.jobRole.toLowerCase().includes(userInputSearch.toLowerCase());
    //         });
    //         // Update filteredJobs state
    //         // setFilteredJobs(filtered);
    //     setFilteredJobs(prevFilteredJobs => [...prevFilteredJobs, ...filtered]);

    //     }
    // };
    



    return (
        <div className="main-container">


            
            <JobInputBox placeholder='Roles' userInputSearch={userInputSearch} setUserInputSearch={setUserInputSearch}
                jobData={jobData} setFilteredJobs={setFilteredJobs}
                toSearch='jobRole' originalData={originalData}
            />
            {/* {console.log(userInputSearch)} */}
            {console.log(jobData)}

            <JobInputBox placeholder='Experience' userInputSearch={userInputSearch} setUserInputSearch={setUserInputSearch}
                jobData={jobData} setFilteredJobs={setFilteredJobs}
                toSearch='minExp' originalData={originalData} 
            />

            <JobInputBox placeholder='Minimum Base Pay salary' userInputSearch={userInputSearch} setUserInputSearch={setUserInputSearch}
                jobData={jobData} setFilteredJobs={setFilteredJobs}
                toSearch='minJdSalary' originalData={originalData}
            />

            <JobInputBox placeholder='Company Name' userInputSearch={userInputSearch}  setUserInputSearch={setUserInputSearch}
                jobData={jobData} setFilteredJobs={setFilteredJobs}
                toSearch='companyName' originalData={originalData}
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
                    // userInputSearch.length ?
                    //     filteredJobs.map(job => (
                    //         <div key={uuidv4()}>
                    //             <JobSingle {...job} handleScroll={handleScroll}/>                             
                    //         </div>
                    //     )) 
                    //     : <JobContainer jobData={jobData} loading={loading} handleScroll={handleScroll} />
                }
                <JobContainer jobData={filteredJobs.length > 0 ?
                     filteredJobs : jobData} loading={loading}
                      handleScroll={handleScroll} />
                      
        
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

