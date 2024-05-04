import React from "react";
import './JobSingleStyle.css'

function JobSingle({ jdUid, companyName, jdLink, jobDetailsFromCompany,
    jobRole, location, logoUrl, minExp, minJdSalary, maxJdSalary }) {
    // function JobSingle(props) {

    return (
        <>
            <div className="job-container-padding">
                <div className="posted-date-container">
                    <span className="posted-date">⏳ Posted 3 days ago</span>
                </div>
                <div className="company-info">
                    <div className="left-side-logo">
                        {/* <img src={props.logoUrl} alt="" /> */}
                        <img src={logoUrl} alt="" />
                        {/* {console.log(props.logoUrl)} */}
                    </div>
                    <div className="company-info-post">
                        <p className="company-name capitalize">{companyName}</p>
                        <p className="capitalize">{jobRole}</p>
                        <p className="company-location capitalize"> {location} </p>
                    </div>
                </div>
                <div className="company-salary">
                    <p>Estimated Salary: 
                       <span> {
                            minJdSalary !== null && maxJdSalary !== null
                                ?'$'+`${minJdSalary} - ${maxJdSalary}`
                                : minJdSalary !== null
                                    ? `${minJdSalary}`
                                    : maxJdSalary !== null
                                        ? '$'+`${maxJdSalary}`
                                        : 'Salary not provided'
                        }
                        <span> LPA</span>
                        </span>
                    </p>
                    <p>✅</p>
                </div>

                <div className="company-para">
                    <p className="about-company">About Company:</p>
                    <p className="about-us">About us</p>
                    <p className="about-company-para fade">
                         {jobDetailsFromCompany.split(' ').slice(0, 50).join(' ')} </p>
                </div>
                <div className="job-link">
                    <a href={jdLink}>View Job</a>
                </div>

               <div className="job-experience">
                    <p className="min-exp">Minimum Experience</p>
                   {
                   minExp!==null ?
                   <p>{minExp} years</p>
                   :<p> Not Required </p>
                   }
                </div>
                

                <button className="apply-btn">⚡ Easy Apply</button>
            </div>
        </>
    )
}

export default JobSingle;