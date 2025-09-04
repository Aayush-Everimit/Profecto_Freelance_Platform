import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function JobListCards(props) {

    return (

        <Link to={`/jobs/${props.id}`} className="card bg-secondary text-white shadow-sm text-decoration-none">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">

                    <h5 className="card-title text-primary mb-0">{props.title}</h5>
                    <span className={`badge rounded-pill ${props.jobType === 'Remote' ? 'bg-success' : 'bg-info'}`}>
                        {props.jobType}
                    </span>
                </div>

                <h6 className="card-subtitle mt-1 mb-2 text-white-50">{props.companyName}</h6>

                <div className="d-flex align-items-center mt-3">
                    <div className="me-4">
                        <i className="bi bi-cash-stack me-2"></i>
                        <span>₹{props.stipend ? props.stipend.toLocaleString() : 'N/A'}/month</span>
                    </div>
                    <div>
                        <i className="bi bi-geo-alt-fill me-2"></i>
                        <span>{props.jobType === 'Remote' ? 'Remote' : props.location}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}