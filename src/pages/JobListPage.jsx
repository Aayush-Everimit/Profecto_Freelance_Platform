import JobListCards from "./JobListCards.jsx";
import {useEffect, useState} from "react";
export default function JobListPage() {

    const[jobs, setJobs] = useState([]);
    useEffect(() => {
        const fetchJobs = async () =>
        {
            try{
            const response = await fetch(`http://localhost:8081/api/jobs`);
            const dataRetrieved = await response.json();
            setJobs(dataRetrieved);
            }
            catch(error){
                console.error("Failed to fetch Jobs",error);
            }
        };
        fetchJobs();
    },[]);

    return (
        <>
            <div className="d-flex flex-column justify-content-center">
                {jobs.map((job) => (<JobListCards key={job.id}
                                                  designation={job.designation}
                                                  companyName={job.companyName}
                                                  location={job.location}
                                                  stipend={job.stipend}
                                                  experience={job.experience}
                />))}
            </div>
        </>
    )
}