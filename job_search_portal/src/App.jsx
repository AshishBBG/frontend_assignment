// import './App.css'
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';

import JobContainer from './components/JobContainerBox/JobContainer'
import JobFilter from './components/JobFilter'

function App() {
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData(); // Fetch initial data when component mounts
    }, []);

    // useEffect(() => {
    //     // Add scroll event listener when component mounts
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         // Remove scroll event listener when component unmounts
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            // When user scrolls to the bottom of the page, load more data
            fetchData();
        }
    };

    const fetchData = async () => {
        if (!loading) {
            setLoading(true); // Set loading to true to prevent multiple simultaneous requests
            try {
                const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        limit: 10,
                        offset: page * 10 // Adjust offset based on page number
                    })
                });
                const data = await response.json();
                setJobData(prevData => [...prevData, ...data.jdList]); // Append new data to existing data
                setPage(prevPage => prevPage + 1); // Increment page number for next request
            } catch (error) {
                console.error("Error fetching job data:", error);
            }
            setLoading(false); // Set loading to false after data is fetched
        }
    };



    const [filteredRole, setFilteredRole] = useState('');
    
  return (
    <>
      {/* <!-- top section starts --> */}
      {/* <div className="main-container">
        <input type="text" placeholder="Roles" className="input-box-job" />
        <input type="text" placeholder="Number Of Employees" className="input-box-job" />
        <input type="text" placeholder="Experience" className="input-box-job" />
        <input type="text" placeholder="Remote" className="input-box-job" />
        <input type="text" placeholder="Minimum Base Pay salary" className="input-box-job" />
        <input type="text" placeholder="Search Company Name" className="input-box-job" />
    </div> */}

      {/* top section */}
      <JobFilter jobData = {jobData} />
      {/* top section ends */}

      <JobContainer jobData = {jobData} loading = {loading} handleScroll = {handleScroll} />

      {/* <!-- top section ends here --> */}
      {/* <div className="job-container"> */}

      {/* <!-- job 1 container start here --> */}
      {/* <div className="job-container-padding">
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
                <p  className="min-exp">Minimum Experience</p>
                <p>4 years</p>
            </div>

            <button  className="apply-btn">⚡ Easy Apply</button>
        </div> */}
      {/* <!-- job 1 container end here --> */}


      {/* <!-- job 2 container start here --> */}
      {/* <div className="job-container-padding">
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
                <p  className="min-exp">Minimum Experience</p>
                <p>4 years</p>
            </div>

            <button  className="apply-btn">⚡ Easy Apply</button>
        </div> */}
      {/* <!-- job 2 container end here --> */}


      {/* <!-- job 3 container start here --> */}
      {/* <div className="job-container-padding">
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
                <p  className="min-exp">Minimum Experience</p>
                <p>4 years</p>
            </div>

            <button  className="apply-btn">⚡ Easy Apply</button>
        </div> */}
      {/* <!-- job 3 container end here --> */}


      {/* <!-- job 4 container start here --> */}
      {/* <div className="job-container-padding">
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
                <p  className="min-exp">Minimum Experience</p>
                <p>4 years</p>
            </div>

            <button  className="apply-btn">⚡ Easy Apply</button>
        </div> */}
      {/* <!-- job 4 container end here --> */}

      {/* </div> */}
    </>
  )
}

export default App
