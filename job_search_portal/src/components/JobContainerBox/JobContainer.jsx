import React from "react";
import "./JobContainerStyle.css"
function JobContainer() {
    return (
        <>
            <div className="job-container">
                <div className="job-container-padding">
                    <div className="posted-date-container">
                        <span className="posted-date">⏳ Posted 3 days ago</span>
                    </div>
                    <div className="company-info">
                        <div className="left-side-logo">
                            <img src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713846233282_m137p.jpg"
                                alt="" />
                        </div>
                        <div className="company-info-post">
                            <p className="company-name">Firefly</p>
                            <p>Frontend Engineer</p>
                            <p className="company-location">India</p>
                        </div>
                    </div>
                    <div className="company-salary">
                        <p>Estimated Salary: ₹30 - 50 LPA</p>
                        <p>✅</p>
                    </div>

                    <div className="company-para">
                        <p className="about-company">About Company:</p>
                        <p className="about-us">About us</p>
                        <p className="about-company-para fade">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est saepe
                            deleniti excepturi placeat dignissimos nam illum, nesciunt facilis autem quibusdam, voluptatibus
                            minus distinctio qui quidem tempora. Ipsam repudiandae totam porro.</p>
                    </div>
                    <div className="job-link">
                        <a href="#">View Job</a>
                    </div>

                    <div className="job-experience">
                        <p className="min-exp">Minimum Experience</p>
                        <p>4 years</p>
                    </div>

                    <button className="apply-btn">⚡ Easy Apply</button>
                </div>

            </div>
        </>
    )
}

export default JobContainer;