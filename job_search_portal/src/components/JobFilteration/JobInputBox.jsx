import React, { useEffect, useState } from "react";
import debounce from 'lodash/debounce'; // Import debounce function from lodash

function JobInputBox({ placeholder, userInputSearch, setUserInputSearch, jobData, setFilteredJobs, toSearch,originalData }) {
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        // Whenever original data changes or userInputSearch changes, apply filtering
        filterJobs();
    }, [userInputSearch, originalData, toSearch]);

    const filterJobs = () => {
            // Perform filtering based on userInputSearch and update filteredJobs state
            const filtered = jobData.filter(job => {
                const value = job[toSearch];
            
            if (typeof value === "string") {
                return value.toLowerCase().includes(userInputSearch.toLowerCase());
            } else if (typeof value === "number") {
                return value === parseInt(userInputSearch);
            }
            return false;
            });
            // setFilteredJobs(filtered);
            // return filtered;
            setFilteredJobs(prevFilteredJobs => [...prevFilteredJobs, ...filtered]);
        };

    const search = debounce((input) => {
        const filtered = originalData.filter(job => {
            const value = job[toSearch];
            // console.log(job.jobRole?.toLowerCase().includes(userInputSearch.jobRole.toLowerCase()));
            if (typeof value === "string") {
                return value.toLowerCase().includes(input.toLowerCase());
            } else if (typeof value === "number") {
                return value === parseInt(input)
            }
            return false;
        });
        setFilteredJobs(filtered);
        // setFilteredJobs(prevFilteredJobs => [...prevFilteredJobs, ...filtered]);

    }, 300);



    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
        setUserInputSearch(inputValue);

        if (inputValue === '') {
            setFilteredJobs([]);
        } else {
            search(inputValue);
        }
    };

    return (
        <input
            type="search"
            placeholder={placeholder}
            className="input-box-job"
            value={inputValue}
            onChange={handleInputChange}
        />
    );
}

export default JobInputBox;
