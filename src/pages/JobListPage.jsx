import React, { useState, useEffect } from 'react';
import JobListCards from "./JobListCards.jsx";

export default function JobListPage() {
    const [jobs, setJobs] = useState([]);

    // Define fetchJobs here, OUTSIDE useEffect
    const fetchJobs = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/jobs');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setJobs(data);
        } catch (error) {
            console.error("Failed to fetch jobs:", error);
        }
    };

    useEffect(() => {
        console.log("Jobs updated, length:", jobs.length);
        console.log("Jobs data:", jobs);
    }, [jobs]);


    useEffect(() => {
        fetchJobs();
    }, []);

    const handleRefresh = () => {
        console.log("Refresh jobs");
        fetchJobs();
    };

    return (
        <div className="bg-dark text-white min-vh-100 p-4">
            <div className="container">
                <h1 className="mb-4">Available Internships</h1>
                <button className="btn btn-secondary mb-3" onClick={handleRefresh}>Refresh Jobs</button>
                <div className="d-flex flex-column gap-3">
                    {jobs.map(job => (
                        <JobListCards
                            key={job.id}
                            title={job.title}
                            companyName={job.companyName}
                            location={job.location}
                            stipend={job.stipend}
                            jobType={job.jobType}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
