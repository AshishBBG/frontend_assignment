import React, { useState, useEffect } from 'react';
import JobFilter from './components/JobFilter'

function App() {
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData(); // Fetch initial data when component mounts
    }, []);

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

            {/* <JobFilter jobData={jobData} setFilteredRole={setFilteredRole} /> */}

            {/* <div>
                
                {jobData.map(job => (
                    <div key={uuidv4()}>
                        {job.jobRole === filteredRole && <JobSingle {...jobData} />}
                    </div>
                ))}
            </div> */}

            {/* top section */}
            <JobFilter jobData = {jobData} loading={loading} handleScroll={handleScroll}/>
            {/* top section ends */}

            {/* <JobContainer jobData={jobData} loading={loading} handleScroll={handleScroll} /> */}

        </>
    )
}

export default App
