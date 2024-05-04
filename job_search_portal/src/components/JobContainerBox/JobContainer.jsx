import React, { useState, useEffect } from 'react';
import "./JobContainerStyle.css"
import JobSingle from "./JobSingle";


function JobContainer() {
    const [jobData, setJobData] = useState([])

    useEffect(() => {
        const fetchJobData = async () => {
            try {
                const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        limit: 10,
                        offset: 0
                    })
                });
                const data = await response.json();
                // console.log(data)
                setJobData(data); // Assuming the data is an array of job objects
            } catch (error) {
                console.error("Error fetching job data:", error);
            }
        };
        fetchJobData();
    }, []); // Empty dependency array to run the effect only once when the component mounts


    return (
        <>
            <div className="job-container">
                {
                    jobData && jobData.jdList ?
                    jobData.jdList.map(job => {
                        console.log(job)
                        return <JobSingle key={job.jdUid} {...job} />
                        }):
                    null

                }
                           
            </div>
        </>
    )
}

export default JobContainer;