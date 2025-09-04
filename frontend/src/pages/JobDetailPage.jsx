import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // useParams is used to get the ID from the URL

export default function JobDetailPage() {
    const { id } = useParams(); // Get the 'id' from the URL, e.g., "1"
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await fetch(`http://localhost:8081/api/jobs/${id}`);
                if (!response.ok) {
                    throw new Error(`Job not found`);
                }
                const data = await response.json();
                setJob(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [id]); // Re-run the effect if the ID in the URL changes

    if (loading) return <div className="bg-dark text-white min-vh-100 p-5 text-center"><h2>Loading...</h2></div>;
    if (error) return <div className="bg-dark text-white min-vh-100 p-5 text-center"><h2>Error: {error}</h2></div>;
    if (!job) return <div className="bg-dark text-white min-vh-100 p-5 text-center"><h2>Job not found.</h2></div>;

    return (
        <div className="bg-dark text-white min-vh-100 p-3 p-md-5">
            <div className="container">
                <div className="card bg-secondary text-white">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h2 className="mb-0">{job.title}</h2>
                        <span className={`badge rounded-pill fs-6 ${job.jobType === 'Remote' ? 'bg-success' : 'bg-info'}`}>
                            {job.jobType}
                        </span>
                    </div>
                    <div className="card-body">
                        <h5 className="card-subtitle mb-3 text-white-50">{job.companyName}</h5>

                        <p className="card-text" style={{ whiteSpace: 'pre-wrap' }}>{job.description}</p>

                        <hr className="border-secondary" />

                        <div className="row">
                            <div className="col-md-6">
                                <h5>Details</h5>
                                <ul className="list-unstyled">
                                    <li><i className="bi bi-geo-alt-fill me-2"></i><strong>Location:</strong> {job.jobType === 'Remote' ? 'Remote' : job.location}</li>
                                    <li><i className="bi bi-cash-stack me-2"></i><strong>Stipend:</strong> ₹{job.stipend ? job.stipend.toLocaleString() : 'N/A'} / month</li>
                                    <li><i className="bi bi-person-fill me-2"></i><strong>Posted by:</strong> @{job.postedBy.username}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-4 text-center">
                            <button className="btn btn-primary btn-lg px-5">Apply Now</button>
                        </div>
                    </div>
                </div>
                <Link to="/jobs" className="btn btn-outline-secondary mt-4">
                    <i className="bi bi-arrow-left me-2"></i>Back to Job List
                </Link>
            </div>
        </div>
    );
}
