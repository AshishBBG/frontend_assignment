import React from "react";
import './JobFilterStyle.css'

function JobFilter() {
    return (
        <>
            <div className="main-container">
                <input type="text" placeholder="Roles" className="input-box-job" />
                <input type="text" placeholder="Number Of Employees" className="input-box-job" />
                <input type="text" placeholder="Experience" className="input-box-job" />
                <input type="text" placeholder="Remote" className="input-box-job" />
                <input type="text" placeholder="Minimum Base Pay salary" className="input-box-job" />
                <input type="text" placeholder="Search Company Name" className="input-box-job" />
            </div>
        </>
    )
}

export default JobFilter;