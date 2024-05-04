import React from "react";
import "./JobContainerStyle.css"
import JobSingle from "./JobSingle";
function JobContainer() {
    return (
        <>
            <div className="job-container">
                <JobSingle />
            </div>
        </>
    )
}

export default JobContainer;