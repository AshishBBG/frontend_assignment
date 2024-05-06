import React, { useEffect, useState } from 'react';
import './JobFilterStyle.css'
// import { v4 as uuidv4 } from 'uuid';
// import JobSingle from './JobContainerBox/JobSingle';
import JobContainer from './JobContainerBox/JobContainer';
import JobInputBox from './JobFilteration/JobInputBox';

function JobFilter({ originalData, jobData, loading, handleScroll }) {


    const [filteredJobs, setFilteredJobs] = useState([]);
    const [userInputSearch, setUserInputSearch] = useState('');


    return (
        <div className="main-container">

            <JobInputBox placeholder='Experience' userInputSearch={userInputSearch} setUserInputSearch={setUserInputSearch}
                jobData={jobData} setFilteredJobs={setFilteredJobs}
                toSearch='minExp' originalData={originalData}
            />

            <JobInputBox placeholder='Roles' userInputSearch={userInputSearch} setUserInputSearch={setUserInputSearch}
                jobData={jobData} setFilteredJobs={setFilteredJobs}
                toSearch='jobRole' originalData={originalData}
            />
            {/* {console.log(userInputSearch)} */}
            {/* {console.log(jobData)} */}

            <JobInputBox placeholder='Minimum Base Pay salary' userInputSearch={userInputSearch} setUserInputSearch={setUserInputSearch}
                jobData={jobData} setFilteredJobs={setFilteredJobs}
                toSearch='minJdSalary' originalData={originalData}
            />

            <JobInputBox placeholder='Company Name' userInputSearch={userInputSearch} setUserInputSearch={setUserInputSearch}
                jobData={jobData} setFilteredJobs={setFilteredJobs}
                toSearch='companyName' originalData={originalData}
            />

            <div className="apply-flex">
                {
                    // userInputSearch.length ?
                    // filteredJobs.map(job => (
                    //     <div key={uuidv4()}>
                    //         <JobSingle {...job} handleScroll={handleScroll}/>                             
                    //     </div>
                    // )) 
                    // : <JobContainer jobData={jobData} loading={loading} handleScroll={handleScroll} />
                }
                <JobContainer jobData={filteredJobs.length > 0 ?
                    filteredJobs : jobData} loading={loading}
                    handleScroll={handleScroll} />


            </div>

        </div>
    );
}

export default JobFilter;

