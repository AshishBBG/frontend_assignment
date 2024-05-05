import React from "react";
import debounce from 'lodash/debounce'; // Import debounce function from lodash


function JobInputBox({ placeholder, setUserInputSearch, jobData, setFilteredJobs, toSearch }) {

    const search  = debounce((input) => {
            // const filtered = jobData.filter(job => job[toSearch]=="string"?
            //  job[toSearch].toLowerCase().includes(input.toLowerCase())? Number.isInteger(job[toSearch])?
            //  job[toSearch].includes(input): null);
            const filtered = jobData.filter(job => {
                const value = job[toSearch];
                if (typeof value === "string") {
                    return value.toLowerCase().includes(input.toLowerCase());
                } else if (typeof value === "number") {
                    // console.log(input)
                    // return value.toString().includes(input.toString());
                    return value === parseInt(input)
                }
                return false;
            });
                setFilteredJobs(filtered);
            
            // setFilteredJobs(filtered);
            // console.log(filtered)

        }, 300); // Debounce time in milliseconds

        // Call debounced function when jobRole changes
        // debouncedFilter(userInputSearch);

        const handleInputChange = (e) =>{
            const inputValue = e.target.value
            setUserInputSearch(inputValue)
            search(inputValue)
        }

    


    return (
        <>
            <input type="search" placeholder={placeholder} className="input-box-job"
                onChange={ handleInputChange}
                    // (e) => {
                    // setUserInputSearch(e.target.value)
                    // search();
                // }
            // }

            />

        </>
    )
}

export default JobInputBox;