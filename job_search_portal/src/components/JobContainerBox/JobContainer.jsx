import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./JobContainerStyle.css"
import JobSingle from "./JobSingle";
import Loading from "./Loading"

function JobContainer({jobData, loading }) {
   
    return (
        <>
            <div className="job-container">
                {jobData.map(job => (
                    <JobSingle key={uuidv4()} {...job} />
                ))}

            </div>
            <div className='center-loading'>
            {loading && <Loading />}
            </div>

        </>
    )
}

export default JobContainer;


