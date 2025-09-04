import { useState } from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from "react-router-dom";

export default function PostJobsPage({ onJobPosted }) {
    const navigate = useNavigate(); // Hook to redirect the user after success


    const [formData, setFormData] = useState({
        title: "",
        companyName: "",
        description: "",
        stipend: "",
        jobType: "Remote",
        city: "",
        state: "",
        pincode: ""
    });

    // Your handleChange function is also perfect
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();


        const jobData = {
            title: formData.title,
            companyName: formData.companyName,
            description: formData.description,
            stipend: formData.stipend,
            jobType: formData.jobType,
            location: '' // Start with an empty location
        };


        if (formData.jobType === 'On-site' || formData.jobType === 'Hybrid') {
            jobData.location = `${formData.city}, ${formData.state} - ${formData.pincode}`;
        }

        try {
            // 3. Send the data to backend API
            const response = await fetch('http://localhost:8081/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(jobData),
            });

            if (response.status === 201) {
                const newJob = await response.json();
                alert('Job posted successfully!');

                if (onJobPosted) {
                    onJobPosted(newJob);
                }

                navigate('/jobList');
            } else {
                const errorText = await response.text();
                alert(`Failed to post job: ${errorText}`);
            }
        } catch (error) {
            console.error("An error occurred while posting the job:", error);
            alert("An error occurred. Please check the console.");
        }
    };


    return (
        <div className="container my-5">
            {/* The onSubmit handler is now connected */}
            <form className="row g-3 p-4 bg-dark text-white rounded shadow-lg mx-auto" style={{ maxWidth: '800px' }} onSubmit={handleSubmit}>
                <h2 className="mb-4">Post a New Internship</h2>

                {/* All your input fields remain the same */}
                <div className="col-md-6">
                    <label htmlFor="title" className="form-label">Job Title</label>
                    <input
                        type="text"
                        className="form-control bg-secondary text-white border-0"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="companyName" className="form-label">Company Name</label>
                    <input
                        type="text"
                        className="form-control bg-secondary text-white border-0"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-12">
                    <label htmlFor="description" className="form-label">Job Description</label>
                    <textarea
                        className="form-control bg-secondary text-white border-0"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div className="col-md-6">
                    <label htmlFor="stipend" className="form-label">Stipend (per month)</label>
                    <input
                        type="number"
                        className="form-control bg-secondary text-white border-0"
                        id="stipend"
                        name="stipend"
                        value={formData.stipend}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-12">
                    <label className="form-label">Job Type</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="jobType" id="remote" value="Remote" checked={formData.jobType === 'Remote'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="remote">Remote</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="jobType" id="hybrid" value="Hybrid" checked={formData.jobType === 'Hybrid'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="hybrid">Hybrid</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="jobType" id="on-site" value="On-site" checked={formData.jobType === 'On-site'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="on-site">On-site</label>
                        </div>
                    </div>
                </div>

                {(formData.jobType === 'On-site' || formData.jobType === 'Hybrid') && (
                    <div className="col-12">
                        <div className="row g-3">
                            <div className="col-md-5">
                                <label htmlFor="city" className="form-label">City</label>
                                <input
                                    type="text"
                                    className="form-control bg-secondary text-white border-0"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">State</label>
                                <select
                                    className="form-select bg-secondary text-white border-0"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    <option>Delhi</option>
                                    <option>Maharashtra</option>
                                    <option>Bengaluru</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="pincode" className="form-label">PIN Code</label>
                                <input
                                    type="text"
                                    className="form-control bg-secondary text-white border-0"
                                    id="pincode"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="invalidCheck2" required />
                        <label className="form-check-label" htmlFor="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    );
}
