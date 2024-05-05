import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 for generating unique keys
import JobSingle from './JobContainerBox/JobSingle'; // Import your JobSingle component
import debounce from 'lodash/debounce'; // Import debounce function from lodash
import './JobFilterStyle.css'
import JobContainer from './JobContainerBox/JobContainer';

function JobFilter({ jobData, loading, handleScroll }) {
    const [jobRole, setJobRole] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);

    const search = ()=>{
    // useEffect(() => {
        // Debounced filtering function
        const debouncedFilter = debounce((input) => {
            const filtered = jobData.filter(job => job.jobRole.toLowerCase().includes(input.toLowerCase()));
            setFilteredJobs(filtered);
        }, 300); // Debounce time in milliseconds

        // Call debounced function when jobRole changes
        debouncedFilter(jobRole);

        // Cleanup function to clear the timeout
        return () => {
            debouncedFilter.cancel(); // Cancel the debounce on component unmount
        };
    // }, [jobData, jobRole]);
}


    return (
        <div className="main-container">
            <input
                type="search"
                placeholder="Roles"
                className="input-box-job"
                onChange={(e) => {
                    setJobRole(e.target.value)
                    search();
                } }
            />
            <div className="apply-flex">
               {console.log(filteredJobs.length)}
                
               { 
               jobRole.length?
               filteredJobs.map(job => (
                    <div key={uuidv4()}>
                        <JobSingle {...job} />
                    </div>
                )): <JobContainer jobData={jobData} loading={loading} handleScroll={handleScroll} />
                }
            </div>

        </div>
    );
}

export default JobFilter;
