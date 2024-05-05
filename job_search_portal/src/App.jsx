import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import JobFilter from './components/JobFilter';
import JobContainer from './components/JobContainerBox/JobContainer';
import JobSingle from './components/JobContainerBox/JobSingle';

function App() {
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData(); // Fetch initial data when component mounts
    }, []);

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

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            // When user scrolls to the bottom of the page, load more data
            fetchData();
        }
    };

    return (
        <>
            <JobFilter jobData={jobData} loading={loading} handleScroll={handleScroll} />
            
            {/* <JobContainer jobData={jobData} loading={loading} handleScroll={handleScroll} /> */}
        </>
    );
}

export default App;
