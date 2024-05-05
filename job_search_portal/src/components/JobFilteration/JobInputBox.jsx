import React, { useState } from "react";
import debounce from 'lodash/debounce'; // Import debounce function from lodash

function JobInputBox({ placeholder, setUserInputSearch, jobData, setFilteredJobs, toSearch }) {
    const [inputValue, setInputValue] = useState('');

    const search = debounce((input) => {
        const filtered = jobData.filter(job => {
            const value = job[toSearch];
            if (typeof value === "string") {
                return value.toLowerCase().includes(input.toLowerCase());
            } else if (typeof value === "number") {
                return value === parseInt(input)
            }
            return false;
        });
        setFilteredJobs(filtered);
    }, 300);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
        setUserInputSearch(inputValue);

        if (inputValue.trim() === '') {
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
