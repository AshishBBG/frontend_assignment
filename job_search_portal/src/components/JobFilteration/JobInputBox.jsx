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


    // const filterJobs = () => {
    //     // Perform filtering based on all applied filters and update filteredJobs state
    //     const filtered = jobData.filter(job => {
    //         // Initialize a flag to indicate if the job passes all filters
    //         let passAllFilters = true;
    
    //         // Iterate over all applied filters
    //         for (const filterKey in userInputSearch) {
    //             const filterValue = userInputSearch[filterKey];
    //             const jobValue = job[filterKey];
    
    //             // Check if the job value matches the filter value
    //             if (filterValue && jobValue) {
    //                 if (typeof jobValue === 'string') {
    //                     // Convert both values to lowercase for case-insensitive comparison
    //                     if (!jobValue.toLowerCase().includes(filterValue.toLowerCase())) {
    //                         passAllFilters = false;
    //                         break; // Break the loop if the job does not match the filter
    //                     }
    //                 } else if (typeof jobValue === 'number') {
    //                     if (jobValue !== parseInt(filterValue)) {
    //                         passAllFilters = false;
    //                         break; // Break the loop if the job does not match the filter
    //                     }
    //                 }
    //             }
    //         }
    
    //         return passAllFilters;
    //     });
    
    //     // Update the filtered jobs state
    //     setFilteredJobs(filtered);
    // };
    

    const search = debounce((input) => {
        const filtered = jobData.filter(job => {
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
