import React from "react";
import './LoadingStyle.css'

function Loading() {
    return (
        <>
        {/* <span className="loader"></span> */}
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </>
    )
}

export default Loading;